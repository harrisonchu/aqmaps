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

def _lower_resolution_v2(list_of_coords, reduction_factor):
    if reduction_factor > 9:
        raise Exception("max reduction factor is 9")

    result = []

    # The polygon's first and last coordinate must be the same in order to enclose the area so we always append the first coordinate here
    result.append(list_of_coords[0])

    for coord in list_of_coords:
        if int(str(coord[0])[-1]) < reduction_factor:
            continue
        result.append(coord)

        # ensure that we always append the last coordinate to enclose the area
    if int(str(list_of_coords[-1][0][-1])) < reduction_factor:
        result.append(list_of_coords[-1])

    return result


# this function will mutate the original geojson
def compress_geojson_to_lower_resolution(geojson, reduction_factor=2):
    for n in range(len(geojson["features"])):
        feature = geojson["features"][n]
        geojson["features"][n]['geometry']['coordinates'][0][0] = _lower_resolution_v2(feature['geometry']['coordinates'][0][0], reduction_factor)
    return geojson

