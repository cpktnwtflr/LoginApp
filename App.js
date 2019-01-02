/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert} from 'react-native';

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
  constructor(props) {
    super(props);
    this.state = { email:'', password:''};
  }
  myFunction=() =>{ const {email, password} = this.state;
  if(email == ""){
    this.setState({Error: 'Email address field is empty.'});
  }
  else if(password == ""){
    this.setState({Error: 'Password field is empty.'});
  }
  else if(password.length<6 || password.length>12){
    // else if(password.length<6 && password.length>12){
    this.setState({Error: 'Password length must be 6-12 characters'});
  }
  else{
    alert('Login Successful!');
  }
  Keyboard.dismiss();
  }
  render() {
    return (
      <KeyboardAvoidingView behaivior="padding" style={styles.container}>
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
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            style={styles.input}
            onChangeText={ email => this.setState({email}) }
          />
          <Text style={styles.err}>{this.state.Error}</Text>
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            placeholder="Input Password"
            placeholderTextColor="grey"
            returnKeyType="done"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            onChangeText={ password => this.setState({password}) }
          />
          <Text style={styles.err}>{this.state.Error}</Text>
          <TouchableOpacity onPress={this.myFunction} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        {/* 7:46<View style={styles.formContainer}></View>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>*/}
      </KeyboardAvoidingView>
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
  err: {
    color:'red', 
    alignItems:'flex-start',
    fontSize: 10
  },
  inputs: {
    padding:10,
    width: '100%',
    position: 'absolute',
    bottom:0,
    backgroundColor: 'white'

  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#714db2',
    paddingVertical: 15,
    height: 40,
    width: '100%',
    marginBottom: 10
  },
  buttonText: {
    textAlign: 'center',
    fontSize:20,
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
    height: 40,
    borderColor: '#8665c4',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    

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
