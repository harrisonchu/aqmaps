# aqmaps
(Optional) Pre-process:
1. If a given geojson is too large, we can compress it down with `compress_geojson.py`


Steps to process data:
1. Convert .tiff file to h3: `convert_raster_to_h3.py`
2. Aggregate data from converted h3 file and inject into a primary geojson (with district boundaries) with `aggregator.py`