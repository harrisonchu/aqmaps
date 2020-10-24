import { addDataToMap } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';

import defaultGeoJson from '../data/gh_compress.geojson.json';

export const fetchCountryDataset = (country) => (dispatch) => {
    const data = processGeojson(defaultGeoJson);
    const info = {
        label: 'Districts of Ghana',
        id: 'default_dataset_ghana'
    };

    dispatch(
        addDataToMap({
            datasets: {
                info,
                data
            },
            option: {
                centerMap: true,
                readOnly: false
            },
            config: {}
        })
    );
}