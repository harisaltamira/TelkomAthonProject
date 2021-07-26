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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const {params} = this.props.route;
    const name = params ? params.data : null;
    this.state.username = name;
  }

  render() {
    const {username} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Home Page</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}
          style={styles.backToLoginButton}>
          <Text style={styles.backToLoginButtonText}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  backToLoginButton: {
    width: 180,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  backToLoginButtonText: {
    color: 'white',
  },
});

export default Home;
