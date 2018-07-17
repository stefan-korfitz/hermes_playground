/**
 * ...
 * ... TODO: meta data for the should come here
 * ...
 */

// Dependency injection...
import React, { Component } from 'react';
import { createStackNavigator, } from 'react-navigation';

// pulling in the different pages...
import LoginNumber from './LoginNumber';
import LoginSms from './LoginSms';
import Main from './Main';

// setting up navigation...
const AppNavigator = createStackNavigator({
    LoginNumber: { screen: LoginNumber },
    LoginSms: { screen: LoginSms },
    Main: { screen: Main },
});

// exporting, so that index.js can pick it up!
export default class App extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}