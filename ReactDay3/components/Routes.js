import React from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Home from './Main.js'
import About from './About.js'

const Routes = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene key = 'main' component = { Home } title = 'Main' initial = { true } />
                <Scene key = 'about' component = { About } title = 'About' />
            </Scene>
        </Router>
    );
}
export default Routes;