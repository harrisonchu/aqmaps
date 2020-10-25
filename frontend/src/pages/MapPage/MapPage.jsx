
import React from 'react';

import KeplerMap from '../../components/KeplerMap/KeplerMap';
import './MapPage.scss';

class MapPage extends React.Component {
    constructor(props) {
        super(props);

        //figure out how to resize dynamically
        this.state = {
            mapWidth: 1200,
            mapHeight: window.innerHeight
        }
    }

    render() {
        return (
            <div className='map-page-container'>
                <KeplerMap {...this.props} width={this.state.mapWidth} height={this.state.mapHeight}/>
                <div className='right-panel'>
                    <div className='info'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </div>
                </div>
            </div>
        )
    }
};

export default MapPage;