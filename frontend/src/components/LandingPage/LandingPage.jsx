import React from 'react';
import CountrySelect from '../CountrySelect/CountrySelect';

import './LandingPage.scss';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-container'>
                <div className='left-pane'>
                    <img className='hero-image'
                        src='https://images.unsplash.com/photo-1564810138081-feb6b1ee8e33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                    />
                </div>
                    <div className='right-pane'>
                        <h1>Welcome to Aqmaps!</h1>
                        <CountrySelect />
                        <p>
                            The Aquaya Institute is a non-profit research and consulting organization dedicated to improving health in the developing world. We deliver the knowledge and tools that are required to achieve universal access to safe water and sanitation.
                        </p>
                    </div>
                </div>
        )
    }
};

  
export default LandingPage;