
import React from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';
import * as util from '../../util/util';

import { fetchCountryDataset } from '../../actions/datasetActions';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const searchStr = this.props.location.search;
        const country = util.getQueryParam(searchStr, 'c');

        if (country) {
            this.props.fetchCountryDataset(country);
        }
    }

    render() {
        return (
            <KeplerGl
                id="kepler-map-1"
                width={window.innerWidth}
                mapboxApiAccessToken={'pk.eyJ1Ijoic2Fza2F0Y2h1d2FuIiwiYSI6ImNrZzRrMmwzMzBsZnYyc28zMWl1ZHV6OTUifQ.JZxanEzPzHMaFA97pv7fgw'}
                height={window.innerHeight}
            />
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCountryDataset: () => dispatch(fetchCountryDataset())
    });
  };
  
export default connect(null,mapDispatchToProps)(Map);