import React from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';

import './LandingPage.scss';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='welcome-widget'>
                <h1>Welcome to AqMaps!</h1>
                <CountrySelect />
            </div>
        )
    }
};

  
export default LandingPage;