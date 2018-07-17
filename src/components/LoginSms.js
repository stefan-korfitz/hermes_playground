import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, StatusBar } from 'react-native';

import Colors from '../assets/colors';
import Strings from '../assets/strings';

export class LoginSms extends Component {

    // constructor
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    // removing toolbar(android) / xx(IOS)
    static navigationOptions = {
        header: null ,
    };

    render() {
        return (
            <View>

                {/* comment */}
                <View>
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={Colors.primary_dark}
                    />
                </View>

                {/* comment */}
                <View style={styles.Header}>
                    <Image style={styles.Header_content}
                        //source={require('../../assets/img/fullrate_logo.png')}
                    />
                </View>

                {/* comment */}
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    <Text style={{padding: 10, fontSize: 42}}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>

                {/* comment */}
                <View style={styles.BtnForward}>
                    <Button onPress={() => this.props.navigation.navigate('Main')} title="gå til main"/>
                </View>

                {/* comment */}
                <Text style={{padding: 25.0, alignSelf: 'center'}}>
                    This is the Login-screen #2 -> SMS
                </Text>

            </View>
        )
    }
}

//#region StyleSheet
const styles = StyleSheet.create({
    StatusBar: {
        backgroundColor: Colors.primary_dark,
    },
    Header: {
        height: 286, // adobe xd stylespec minus 10, to accompany the height of statusbar
        paddingBottom: 62,
        justifyContent: 'flex-end',
        backgroundColor: Colors.primary,
    },
    Header_content: {
        alignSelf: 'center',
    },
    BtnForward: {
        backgroundColor: Colors.red,
    },
});
//#endregion StyleSheet

export default LoginSms;