/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
} from 'react-native';

const App = () => {
  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'lightblue',
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 250,
          marginHorizontal: 20,
          paddingLeft: 10 ,
          color: 'grey',
        }}
        defaultValue='Input email address'
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'lightblue',
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 10,
          marginHorizontal: 20,
          paddingLeft: 10 ,
          color: 'grey',
        }}
        defaultValue='Input password'
      />

      <TextInput
        style={{
          height: 40,
          borderColor: 'lightblue',
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 10,
          marginHorizontal: 20,
          paddingLeft: 10 ,
          color: 'grey',
        }}
        defaultValue='Login'
      />

      <View style={{
        width:300, 
        height: 40, 
        backgroundColor: 'lightblue', 
        borderColor: 'lightblue', 
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 10,
      }}
      />

      {/* <View style={{
        flex: 1, 
        justifyContent:'flex-end', 
        flexDirection: 'row'
        <Text>Forgot password</Text>
      }}
      /> */}
      

    </View>
  )

};


const App = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Input email address" style={styles.textInput} />
      <TextInput placeholder="Input Password" style={styles.textInput} />
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Login</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 1 }}>

          <Text>Forgot password</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
          <Text>New User?</Text>
          <Text style={styles.signUpText}> Sign Up</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: { borderWidth: StyleSheet.hairlineWidth, borderColor: 'grey', width: '100%', marginVertical: 5, borderRadius: 5 },
  buttonContainer: { backgroundColor: 'blue', width: '100%', padding: 20, alignItems: 'center', borderRadius: 5, marginTop: 5 },
  buttonText: { color: 'white' },
  signUpText: { color: 'blue' }
});

export default App;
