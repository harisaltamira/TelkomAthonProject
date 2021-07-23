import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
      data: 'halo',
      email: '',
      password: '',
      modalShow: false,
    };
  }

  _renderInputPlaceholder() {
    return (
      <SafeAreaView style={styles.textInputContainer}>
        <TextInput
          onChangeText={this._onChangeEmail.bind(this)}
          placeholder=" Input Email Address"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={this._onChangePassword.bind(this)}
          placeholder=" Input Password"
          style={styles.textInput}
        />
        <TouchableOpacity
          style={this._loginButtonActive()}
          onPress={() => this._checkLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  _renderAdditionalMenu() {
    return (
      <SafeAreaView style={styles.additionalMenuContainer}>
        <TouchableOpacity onPress={() => this.setState({modalShow: true})}>
          <SafeAreaView style={{flex: 1, marginTop: 5}}>
            <Text>Forgot Password?</Text>
          </SafeAreaView>
        </TouchableOpacity>

        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            flexDirection: 'row',
            marginTop: 5,
          }}>
          <Text>New User?</Text>
          <TouchableOpacity onPress={() => this._navigationRegister()}>
            <Text style={styles.signUpText}> Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </SafeAreaView>
    );
  }

  _renderModalShow() {
    return (
      <Modal
        style={{justifyContent: 'flex-end'}}
        onBackButtonPress={() => this.setState({modalShow: false})}
        onBackdropPress={() => this.setState({modalShow: false})}
        isVisible={this.state.modalShow}>
        {/* modal container */}
        <View style={styles.modalContainer}>
          {/* modal close button */}
          <View
            style={{justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <TouchableOpacity
              onPress={() => this.setState({modalShow: false})}
              style={styles.smallButtonContainerGrey}>
              <Text>Close</Text>
            </TouchableOpacity>
            {/* modal description */}
          </View>
          <Text style={{fontWeight: 'bold'}}>Forgot your password?</Text>
          <Text style={{marginTop: 10}}>
            Enter your email below to receive you password reset instruction
          </Text>
          {/* modal text input */}
          <View
            style={{
              height: 45,
              justifyContent: 'center',
              marginTop: 10,
              paddingHorizontal: 20,
              borderWidth: StyleSheet.hairlineWidth,
              borderRadius: 10,
            }}>
            <TextInput placeholder="Input your email address" />
          </View>
          {/* modal send email button */}
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <TouchableOpacity style={styles.smallButtonContainerBlue}>
              <Text style={{color: 'white'}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }

  _renderLoginOption() {
    return (
      <SafeAreaView style={styles.loginOptionContainer}>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Text>Or Login With</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={{width: 50, height: 50, alignItems: 'center', marginTop: 10}}
            source={require('../../Image/Google.png')}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  _navigationRegister = () => {
    this.props.navigation.navigate('Register');
  };

  _onChangeEmail(text) {
    this.setState({email: text});
    console.log(this.state.email);
  }

  _onChangePassword(text) {
    this.setState({password: text});
    console.log(this.state.password);
  }

  _loginButtonActive() {
    const {email, password} = this.state;
    if (email.length > 3 && password.length > 3) {
      return styles.buttonContainerBlue;
    } else {
      return styles.buttonContainerGrey;
    }
  }

  // _checkLogin() {
  //   const postData = {
  //     email: 'yogy@gmail.com',
  //     password: 'makanIndomie',
  //   };
  //   fetch('http://code.aldipee.com/api/v1/auth/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(postData),
  //   })
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       console.log(responseJson);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       alert('Something Went Wrong');
  //     });
  // }

  _checkLogin() {
    const {email, password} = this.state;
    const data = [
      {email: 'haris', password: '1234'},
      {email: 'haris@gmail.com', password: '1234a'},
      {email: 'tester', password: 'tester'},
      {email: '', password: ''},
    ];
    let accountFound = false;
    for (let i in data) {
      if (email == data[i].email && password == data[i].password) {
        accountFound = true;
        break;
      }
    }
    if (accountFound == true) {
      this.props.navigation.navigate('BottomTabsNavigation');
    } else {
      alert('Login Failed');
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderInputPlaceholder()}
        {this._renderAdditionalMenu()}
        {this._renderLoginOption()}
        {this._renderModalShow()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    paddingHorizontal: 30,
    backgroundColor: '#f5f5f5',
  },

  textInputContainer: {
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textInput: {
    marginVertical: 5,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#2bb3e0',
  },

  buttonContainerBlue: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  buttonContainerGrey: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: `#a9a9a9`,
  },

  buttonText: {
    color: 'white',
  },

  additionalMenuContainer: {
    flexDirection: 'row',
    width: '100%',
  },

  signUpText: {
    fontWeight: 'bold',
    color: '#2bb3e0',
  },

  loginOptionContainer: {
    alignItems: 'center',
  },

  modalContainer: {
    height: 250,
    left: 10,
    right: 10,
    bottom: 10,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },

  smallButtonContainerBlue: {
    width: 80,
    height: 30,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  smallButtonContainerGrey: {
    width: 80,
    height: 30,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: `#d3d3d3`,
  },
});

export default Login;
