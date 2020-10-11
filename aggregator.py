import h3
import json
import pandas as pd
from shapely.geometry import Point, Polygon

mapping = json.load(open('./datasets/accessibility/ghana_accessibility_h3.json'))
data = json.load(open('./datasets/gh_districts.geojson'))

df = pd.DataFrame(data['features'])
length = len(df)
processed = 0

for feature_idx in range(length):
    feature = df.loc[feature_idx]
    geo = feature.geometry

    coordinates = geo['coordinates'][0][0]
    poly = Polygon(coordinates)

    sum_of_vals = 0
    count = 0

    for hid in mapping:
        hexagon = mapping[hid]
        lat = hexagon['lat']
        lng = hexagon['lng']
        val = hexagon['val']

        p = Point(lat, lng)
        contained = poly.contains(p)
        if contained == True:
            sum_of_vals += val
            count += 1

            print(feature['properties']['DISTRICT'])
            print(p)
            print(val)
            print(contained)

    processed += count
    
    data['features'][feature_idx]['properties']['avg_accessibility'] = sum_of_vals / count #add average to geojson

print('done')
print(processed)

json_object = json.dumps(data, indent=1)
  
with open('./res.geojson', 'w') as dset_f: 
    dset_f.write(json_object)