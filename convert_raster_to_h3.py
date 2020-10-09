import rasterio
import h3
import csv

datasets_dir = 'datasets'
sub_dir = 'accessiblity'
input_filename = 'ghana_accessiblity_raster.tiff'
output_filename = 'ghana_accessiblity_h3.csv'

f = rasterio.open('./' + datasets_dir + '/' + sub_dir + '/' + input_filename)
band1 = f.read(1)

dset = {}
for x in range(len(band1)):
    for y in range(len(band1[x])):
        lat, lng = f.xy(x, y)

        val = band1[x][y]

        hex_id = h3.geo_to_h3(lng, lat, 7) #swap lng and lat positions to fix layer orientiation
        dset[hex_id] = val

with open('./' + datasets_dir + '/' + sub_dir + '/' + output_filename,'r+') as dset_f:
    writer = csv.writer(dset_f)

    writer.writerow(['hex_id','val'])

    for hid, val in dset.items():
        writer.writerow([str(hid), int(val)])