/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, CheckBox} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
  constructor(props)
  {
    super(props);
    this.state = { email:'', password:'', emailError:'', passwordError:'', emailValue:'', passwordValue:'', errorChecker:'0', btnState:true,};
    this.handleChangeText=this.handleChangeText.bind(this);
    this.handleChangeTextPass=this.handleChangeTextPass.bind(this);
  }

  handleChangeText(NewEmailValue)
  {
    this.setState({emailValue: NewEmailValue});
    if(!this.state.emailValue.includes('@') || !this.state.emailValue.includes('.co'))
      {
        this.setState({emailError: "Email text isn't email form."});
        this.setState({btnState:true});
      }
    else 
      {
        this.setState({emailError: ''});
        this.setState({btnState:false});
      }
  }

  handleChangeTextPass(NewPasswordValue)
  {
    this.setState({passwordValue: NewPasswordValue});
    if(this.state.passwordValue.length<5 || this.state.passwordValue.length>11)
      {
        this.setState({passwordError: 'Password length must be 6-12 characters'});
        this.setState({btnState:true});
      }
    else
      {
        this.setState({passwordError:''});
        this.setState({btnState:false});
      }
  }

  myFunction(NewPasswordValue,NewEmailValue){
    alert('Login Successful!');
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
            defaultValue={this.state.emailValue}
            onChangeText={this.handleChangeText}
          />
          <Text style={styles.err}>{this.state.emailError}</Text>
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
            defaultValue={this.state.passwordValue}
            onChangeText={this.handleChangeTextPass}
          />
          <Text style={styles.err}>{this.state.passwordError}</Text>
          <View style={styles.rememberMe}>
          <CheckBox/><Text style={styles.rememberMeTxt}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={this.myFunction} style={styles.buttonContainer} disabled={this.state.btnState}>
          <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
    alignItems: 'center',
    //backgroundColor: 'blue'
  },
  err: {
    color:'red', 
    alignItems:'flex-start',
    fontSize: 12
  },
  inputs: {
    //flex:1,
    padding:10,
    width: '100%',
    position: 'absolute',
    bottom:0,
    //justifyContent:'flex-end',
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
  rememberMe:{
    flexDirection: 'row',
    alignSelf:'flex-start',
    justifyContent:'center',
    

  },
  rememberMeTxt:{
    //fontSize: 12,
    alignSelf: 'center'
  }


});
