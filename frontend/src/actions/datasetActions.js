import { addDataToMap } from 'kepler.gl/actions';

import defaultGeoJson from '../data/gh_districts.json';

export const fetchDataset = () => (dispatch) => {
    const sampleTripData = {
        fields: [
          {name: 'tpep_pickup_datetime', format: 'YYYY-M-D H:m:s', type: 'timestamp'},
          {name: 'pickup_longitude', format: '', type: 'real'},
          {name: 'pickup_latitude', format: '', type: 'real'}
        ],
        rows: [
          ['2015-01-15 19:05:39 +00:00', -73.99389648, 40.75011063],
          ['2015-01-15 19:05:39 +00:00', -73.97642517, 40.73981094],
          ['2015-01-15 19:05:40 +00:00', -73.96870422, 40.75424576],
        ]
       };
       
    //    const sampleConfig = {
    //      visState: {
    //        filters: [
    //          {
    //            id: 'me',
    //            dataId: 'test_trip_data',
    //            name: 'tpep_pickup_datetime',
    //            type: 'timeRange',
    //            enlarged: true
    //          }
    //        ]
    //      }
    //    }

    dispatch(
        addDataToMap({
            datasets: {
                info: {
                    label: 'Districts of Ghana',
                    id: 'default_dataset_ghana'
                },
                data: sampleTripData
            },
            option: {
                centerMap: true,
                readOnly: false
            },
            config: {}
        })
    );
}