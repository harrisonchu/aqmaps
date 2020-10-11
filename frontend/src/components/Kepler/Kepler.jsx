
import React from 'react';
import KeplerGl from 'kepler.gl';

const Map = props => (
    <KeplerGl
        id="foo"
        width={window.innerWidth}
        mapboxApiAccessToken={'pk.eyJ1Ijoic2Fza2F0Y2h1d2FuIiwiYSI6ImNrZzRrMmwzMzBsZnYyc28zMWl1ZHV6OTUifQ.JZxanEzPzHMaFA97pv7fgw'}
        height={window.innerHeight}
    />
);

export default Map;