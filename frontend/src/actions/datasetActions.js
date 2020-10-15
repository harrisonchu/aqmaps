import { addDataToMap } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';

import defaultGeoJson from '../data/gh_districts_with_accessibility.geojson.json';

export const fetchDataset = () => (dispatch) => {
    dispatch(
        addDataToMap({
            datasets: {
                info: {
                    label: 'Districts of Ghana',
                    id: 'default_dataset_ghana'
                },
                data: processGeojson(defaultGeoJson)
            },
            option: {
                centerMap: true,
                readOnly: false
            },
            config: {}
        })
    );
}