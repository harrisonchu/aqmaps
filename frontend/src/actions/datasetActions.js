import { addDataToMap } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';

import defaultGeoJson from '../data/gh_compress_multi_layers.geojson.json';

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
            config: {
                visState: {
                    filters: [
                      {
                        id: 'mean_diarrhea',
                        dataId: 'default_dataset_ghana',
                        name: 'mean_diarrhea',
                        type: 'real',
                        plotType: 'histogram'
                      },
                      {
                        id: 'mean_accessibility',
                        dataId: 'default_dataset_ghana',
                        name: 'mean_accessibility',
                        type: 'real',
                        plotType: 'histogram'
                      },
                      {
                        id: 'mean_od',
                        dataId: 'default_dataset_ghana',
                        name: 'mean_od',
                        type: 'real',
                        plotType: 'histogram'
                      },
                      {
                        id: 'mean_edu',
                        dataId: 'default_dataset_ghana',
                        name: 'mean_edu',
                        type: 'real',
                        plotType: 'histogram'
                      }
                    ]
                  }
            }
        })
    );
}