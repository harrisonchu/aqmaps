from haversine import haversine
import h3

def _lower_resolution(list_of_coords, h3_corners, reduction_factor):
    if reduction_factor > 9:
        raise Exception("max reduction factor is 9")

    result = []

    # The polygon's first and last coordinate must be the same in order to enclose the area so we always append the first coordinate here
    result.append(list_of_coords[0])

    for coord in list_of_coords:
        if int(str(coord[0])[-1]) < reduction_factor and h3.geo_to_h3(coord[1], coord[0], 9) not in h3_corners:
            continue
        result.append(coord)

        # ensure that we always append the last coordinate to enclose the area
    if int(str(list_of_coords[-1][0])[-1]) < reduction_factor:
        result.append(list_of_coords[-1])

    return result

def _h3_district_corners(geojson):
    idx = {}
    for feature in geojson["features"]:
        for c in feature["geometry"]["coordinates"][0][0]:
            # resolution=9 is roughly 0.17km end to end
            key = h3.geo_to_h3(c[1], c[0], 9)
            if key not in idx:
                idx[key] = {feature['properties']['DISTRICT']}
            else:
                idx[key].add(feature['properties']['DISTRICT'])
    # if there are more than 2 districts in a set then it's a corner of more than 2 districts
    return {k for k, v in idx.items() if len(v) > 2}

# this function will mutate the original geojson
def compress_geojson_to_lower_resolution(geojson, reduction_factor=2):
    h3_corners = _h3_district_corners(geojson)
    for n in range(len(geojson["features"])):
        feature = geojson["features"][n]
        geojson["features"][n]['geometry']['coordinates'][0][0] = _lower_resolution(feature['geometry']['coordinates'][0][0], h3_corners, reduction_factor)
    return geojson

