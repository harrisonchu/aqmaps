def _lower_resolution(list_of_coords, reduction_factor):
    result = []
    
    # The polygon's first and last coordinate must be the same in order to enclose the area so we always append the first coordinate here
    result.append(list_of_coords[0])

    for n in range(1, len(list_of_coords)):
        if n % reduction_factor == 0:
            result.append(list_of_coords[n])
    
    if len(list_of_coords) % reduction_factor != 0:
        # ensure that we always append the last coordinate to enclose the area
        result.append(list_of_coords[-1])
    return result

# this function will mutate the original geojson
def compress_geojson_to_lower_resolution(geojson, reduction_factor=2):
    for n in range(len(geojson["features"])):
        feature = geojson["features"][n]
        geojson["features"][n]['geometry']['coordinates'][0][0] = _lower_resolution(feature['geometry']['coordinates'][0][0], reduction_factor)
    return geojson

