import React from 'react';
import CountrySelect from '../../components/CountrySelect/CountrySelect';

import './LandingPage.scss';

class LandingPage extends React.Component {
    render() {
        return (
            <div className='landing-page-container'>
                <div className='left-pane'>
                    <img className='hero-image'
                        src='https://images.unsplash.com/photo-1578589318433-39b5de440c3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80'
                    />
                </div>
                <div className='right-pane'>
                    <div className='content-container'>
                        <div className='header'>
                            <h1>Welcome to Aqmaps!</h1>
                            <CountrySelect />
                        </div>

                        <div className='description'>
                            <img className='logo' src='https://www.aquaya.org/wp-content/uploads/logo_Aquaya1.png' />
                            <p>The Aquaya Institute is a non-profit research and consulting organization dedicated to improving health in the developing world. We deliver the knowledge and tools that are required to achieve universal access to safe water and sanitation.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

  
export default LandingPage;