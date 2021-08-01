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
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '', //fullname container
      email: '', //email container
      password: '', //password container
      loading: false,
    };
  }

  _renderHeader() {
    return (
      <SafeAreaView styles={styles.headerContainer}>
        <SafeAreaView style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={'#2bb3e0'}
            />
          </TouchableOpacity>
          <SafeAreaView style={styles.headerDescriptionContainer}>
            <Text style={styles.headerText}>Register</Text>
            <Text style={styles.headerDescriptionText}>
              Please enter details to register
            </Text>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    );
  }

  _renderBody() {
    return (
      <View style={styles.body}>
        <TextInput
          onChangeText={this._onChangeFullname.bind(this)}
          placeholder="Full Name *Required"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Username"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={this._onChangeEmail.bind(this)}
          placeholder="E-mail *Required"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TextInput
          onChangeText={this._onChangePassword.bind(this)}
          placeholder="Password *Required"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#a9a9a9"
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => this._registerAccount()}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderAdditionalMenu() {
    return (
      <View style={styles.additionalMenuContainer}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.contentDescription}>
            <Text>Already Have Account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.loginText}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  _onChangeFullname(text) {
    this.setState({fullname: text});
    console.log(this.state.fullname);
  }

  _onChangeEmail(text) {
    this.setState({email: text});
    console.log(this.state.email);
  }

  _onChangePassword(text) {
    this.setState({password: text});
    console.log(this.state.password);
  }

  async _registerAccount() {
    this.setState({loading: true});
    // const userAccount = {
    //   email: 'aldipeee@yopmail.com',
    //   password: 'moeng2020',
    // };
    const userAccount = {
      name: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
    };
    try {
      // const data = {
      //   data: {
      //     name:1,
      //     email:2,
      //     token:3
      //     message
      //   }
      // }
      // const data = data_axios
      // data.datax.name
      // const { datax } = data_axios
      // datax.name
      const {data} = await axios.post(
        'http://code.aldipee.com/api/v1/auth/register',
        userAccount,
      );
      this.setState({loading: false});
      // console.log(JSON.stringify(data));
      alert('Sign up success. Verification email will be sent to your email');
    } catch (error) {
      let err = 'Error : Something went wrong';
      alert(error);
      this.setState({loading: false});
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this._renderHeader()}
        {this._renderBody()}
        {this._renderAdditionalMenu()}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    backgroundColor: '#f5f5f5',
  },

  headerContainer: {
    flex: 2,
    alignContent: 'flex-start',
    paddingHorizontal: 5,
  },

  headerText: {
    marginTop: '2%',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2bb3e0',
  },

  headerDescriptionContainer: {
    alignContent: 'flex-start',
    paddingHorizontal: 5,
  },

  headerDescriptionText: {
    fontSize: 16,
    color: '#8f8f8f',
  },

  navigationBack: {
    marginTop: '5%',
    marginHorizontal: '2%',
    width: 30,
    height: 15,
  },

  body: {
    marginTop: '5%',
    padding: 15,
  },

  textInput: {
    width: '100%',
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#2bb3e0',
    color: '#000000',
  },

  contentDescription: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '5%',
  },

  buttonContainer: {
    alignItems: 'center',
    marginVertical: 5,
    width: '100%',
    backgroundColor: '#2bb3e0',
    borderRadius: 10,
    padding: 20,
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },

  loginText: {
    fontWeight: 'bold',
    color: '#2bb3e0',
  },

  additionalMenuContainer: {
    alignContent: 'flex-start',
  },
});

export default Register;
