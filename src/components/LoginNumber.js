import React from 'react';
import { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity, StatusBar } from 'react-native';

import Colors from '../assets/colors';
import Strings from '../assets/strings';

import Brand_logo from '../assets/images/fullrate/brand_logo';
import Next_svg from '../assets/icons/fullrate/next';

export class LoginNumber extends Component {

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
                    <View style={styles.Header_content}>
                        <Brand_logo/>
                    </View>
                </View>

                {/* comment */}
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                </View>

                {/* rendering assets->img->next.js */}
                <TouchableOpacity style={styles.BtnForward}
                    activeOpacity = { .7 } onPress={() => this.props.navigation.navigate('LoginSms')}>
                        <Next_svg/>
                </TouchableOpacity>

                {/* comment */}
                <Text style={{padding: 25.0, alignSelf: 'center'}}>
                    This is the Login-screen #1 -> NUMBER
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
        alignSelf: 'center',
    },
});
//#endregion StyleSheet

export default LoginNumber;