
import React from 'react';
import { connect } from 'react-redux';
import KeplerGl from 'kepler.gl';

import { fetchDataset } from '../../actions/datasetActions';

class Map extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchDataset();
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
        fetchDataset: () => dispatch(fetchDataset())
    });
  };
  
export default connect(null,mapDispatchToProps)(Map);