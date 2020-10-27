import { addDataToMap } from 'kepler.gl/actions';
import { processGeojson } from 'kepler.gl/processors';

import districts from '../data/gh_compress_multi_layers.geojson.json';
import roads from '../data/gh_roads_123_p.json';
import classes from '../data/gh12_class_round_p.json';

export const fetchCountryDataset = (country) => (dispatch) => {
    const datasets = [
        {
            info: {
                label: 'Classes of Ghana',
                id: 'gh_classes'
            },
            data: processGeojson(classes)
        },
        {
            info: {
                label: 'Roads of Ghana',
                id: 'gh_roads'
            },
            data: processGeojson(roads)
        },
        {
            info: {
                label: 'Districts of Ghana - Statistics',
                id: 'gh_districts'
            },
            data: processGeojson(districts)
        }
    ];

    dispatch(
        addDataToMap({
            datasets,
            option: {
                centerMap: true,
                readOnly: false
            },
            config: {
                visState: {
                    filters: [
                        {
                            id: 'mean_diarrhea',
                            dataId: 'gh_districts',
                            name: 'mean_diarrhea',
                            type: 'real',
                            plotType: 'histogram'
                        },
                        {
                            id: 'mean_accessibility',
                            dataId: 'gh_districts',
                            name: 'mean_accessibility',
                            type: 'real',
                            plotType: 'histogram'
                        },
                        {
                            id: 'mean_od',
                            dataId: 'gh_districts',
                            name: 'mean_od',
                            type: 'real',
                            plotType: 'histogram'
                        },
                        {
                            id: 'mean_edu',
                            dataId: 'gh_districts',
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