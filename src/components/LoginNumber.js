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

    // click metode for Next_svg
    callFun = () => {
        alert("Image Clicked!!!");
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
                    <Brand_logo style={styles.Header_content}/>
                </View>

                {/* comment */}
                <View style={{padding: 10}}>
                    <TextInput
                        style={{height: 40}}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({text})}
                    />
                    {/* <Text style={{padding: 10, fontSize: 42}}>
            {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
          </Text> */}
                </View>

                {/* rendering assets->img->next.js */}
                <TouchableOpacity style={styles.BtnForward}
                    activeOpacity = { .7 } onPress={() => this.props.navigation.navigate('LoginSms')}>
                        <Next_svg/>
                </TouchableOpacity>

                {/* comment */}
                {/*<View style={styles.BtnForward}>*/}
                    {/*<Button onPress={() => this.props.navigation.navigate('LoginSms')} title="gå til sms"/>*/}
                {/*</View>*/}

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