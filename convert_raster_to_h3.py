import rasterio
import h3
import csv
import json

datasets_dir = 'datasets'
sub_dir = 'accessibility'
input_filename = 'ghana_accessibility_raster.tiff'
output_filename = 'ghana_accessibility_h3.json'

f = rasterio.open('./' + datasets_dir + '/' + sub_dir + '/' + input_filename)
band1 = f.read(1)

dset = {}
for x in range(len(band1)):
    for y in range(len(band1[x])):
        lat, lng = f.xy(x, y)

        val = band1[x][y]

        hex_id = h3.geo_to_h3(lng, lat, 7) #swap lng and lat positions to fix layer orientiation
        dset[hex_id] = {'lat': float(lat), 'lng': float(lng), 'val': int(val)}

json_object = json.dumps(dset, indent = 4) 
  
with open('./' + datasets_dir + '/' + sub_dir + '/' + output_filename, 'r+') as dset_f: 
    dset_f.write(json_object) 