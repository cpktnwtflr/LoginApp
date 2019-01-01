/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

/*
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./Logo.png')}
          />
        </View>
        <View style={styles.inputs}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            placeholder="Input Email Address"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            placeholder="Input Password"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* 7:46<View style={styles.formContainer}></View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:5,
    flex: 1,
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
  inputs: {
    padding:10,
    width: '100%',
    position: 'absolute',
    bottom:0,
    //backgroundColor: 'yellow'

  },
  buttonContainer: {
    backgroundColor: '#714db2',
    paddingVertical: 15,
    height: 45,
    width: '100%',
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  logoContainer: {
    //backgroundColor: 'green',

  },
  logo: {
    

  },
  inputText: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'black'
    

  },
  input: {
    fontStyle: 'italic',
    width: '100%',
    height: 45,
    borderColor: '#8665c4',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 20,

  },

/*  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
*/

});
