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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
        <TextInput placeholder="Fullname" style={styles.textInput} />
        <TextInput placeholder="Username" style={styles.textInput} />
        <TextInput placeholder="E-mail" style={styles.textInput} />
        <TextInput placeholder="Phone Number" style={styles.textInput} />
        <TextInput placeholder="Password" style={styles.textInput} />
        <TextInput placeholder="Confirm Password" style={styles.textInput} />
        <TouchableOpacity style={styles.buttonContainer}>
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
    color: 'gainsboro',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#2bb3e0',
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
