
import React from 'react';

import KeplerMap from '../../components/KeplerMap/KeplerMap';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <KeplerMap {...this.props} />
        )
    }
};

export default MapPage;