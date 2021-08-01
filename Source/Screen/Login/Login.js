import {Spinner} from 'native-base';
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
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import axios from 'axios';
// import { fetchLogin} from '../../Redux/ReduxLogin/';

// const mapStateToProps = ({loginAuth, registerAuth}) => {
//   const {loading, loginResponse, error} = loginAuth;
//   const {loadingRegister, registerResponse, errorRegister} = registerAuth;
//   return {
//     loading,
//     loginResponse,
//     forgotResponse,
//     error,
//     loadingRegister,
//     registerResponse,
//     errorRegister,
//   };
// };

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', //email container
      password: '', //password container
      modalShow: false, //showing modal
      loading: false, //showing login activity indicator
    };
  }

  _renderLoginTitle() {
    return (
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            width: 300,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../Image/TelkomIndonesiaOld.png')}
        />
      </View>
    );
  }

  _renderInputPlaceholder() {
    return (
      //data input container
      <SafeAreaView style={styles.textInputContainer}>
        {/* email input placeholder */}
        <TextInput
          onChangeText={this._onChangeEmail.bind(this)}
          placeholder=" Input Email Address"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        {/* password input placeholder */}
        <TextInput
          onChangeText={this._onChangePassword.bind(this)}
          placeholder=" Input Password"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        {/* login button */}
        <TouchableOpacity
          style={this._loginButtonActive()}
          onPress={() => this._checkLogin()}>
          {this.state.loading ? (
            <ActivityIndicator size="large" color="#ffffff" style={{}} />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
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
      // modal component
      <Modal
        style={{justifyContent: 'flex-end'}}
        onBackButtonPress={() => this.setState({modalShow: false})}
        onBackdropPress={() => this.setState({modalShow: false})}
        isVisible={this.state.modalShow}>
        {/* modal container */}
        <KeyboardAvoidingView>
          <View style={styles.modalContainer}>
            {/* modal close button */}
            <View
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
              }}>
              <TouchableOpacity
                onPress={() => this.setState({modalShow: false})}
                style={styles.smallButtonContainerGrey}>
                <Text
                  style={{
                    color: '#ffffff',
                  }}>
                  Close
                </Text>
              </TouchableOpacity>
            </View>
            {/* modal description */}
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Forgot your password?
            </Text>
            <Text
              style={{
                marginTop: 10,
              }}>
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
              <TextInput
                placeholder="Input your email address"
                placeholderTextColor="#a9a9a9"
                style={{color: '#000000'}}
              />
            </View>
            {/* modal send email button */}
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <TouchableOpacity style={styles.smallButtonContainerBlue}>
                <Text style={{color: '#ffffff'}}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
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
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              marginTop: 10,
            }}
            source={require('../../Image/Diarium.png')}
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

  // //function check login data manual
  // _checkLogin() {
  //   const {email, password} = this.state;
  //   this.setState({loading: true});
  //   const data = [
  //     {email: 'haris', password: '1234'},
  //     {email: 'harisaltamira@gmail.com', password: '12345'},
  //     {email: 'tester', password: 'tester'},
  //     {email: '', password: ''},
  //   ];
  //   let accountFound = false;
  //   for (let i in data) {
  //     if (email == data[i].email && password == data[i].password) {
  //       accountFound = true;
  //       break;
  //     }
  //   }
  //   if (accountFound == true) {
  //     this.props.navigation.navigate('BottomTabsNavigation');
  //   } else {
  //     alert('Login Failed');
  //   }
  //   this.setState({loading: false});
  // }

  // async getAllMovies() {
  //   this.setState({loading: true});
  //   try {
  //     const {data} = await axios.get('http://code.aldipee.com/api/v1/movies');
  //     data.results.sort((a, b) => a.title.localeCompare(b.title));
  //     this.setState({movies: data.results, loading: false});
  //   } catch (error) {
  //     let err = 'Something went wrong';
  //     alert(err);
  //     this.setState({loading: false});
  //   }
  // }

  async _checkLogin() {
    this.setState({loading: true});
    // const userAccount = {
    //   email: 'aldipeee@yopmail.com',
    //   password: 'moeng2020',
    // };
    const userAccount = {
      email: this.state.email,
      password: this.state.password,
    };
    try {
      const {data, status} = await axios.post(
        'http://code.aldipee.com/api/v1/auth/login',
        userAccount,
      );
      this.setState({loading: false});
      this.props.navigation.navigate('BottomTabsNavigation');
      // console.log(JSON.stringify(data));
      // alert(JSON.stringify(data));
    } catch (error) {
      let err = 'Error : Something went wrong';
      alert(err);
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderLoginTitle()}
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
    // backgroundColor: '#f5f5f5',
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
    color: '#000000',
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
    color: '#ffffff',
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
    backgroundColor: `#a9a9a9`,
  },
});

export default Login;
