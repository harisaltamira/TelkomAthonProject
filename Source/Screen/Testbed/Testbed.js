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
// import Icon from 'react-native-vector-icons/Fontisto';

class Testbed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>component works</Text>
        {/* <Icon.Button name="home" backgroundColor="#3b5998">
          Login with Facebook
        </Icon.Button> */}
        {/* <Icon.Button name="facebook" backgroundColor="#3b5998">
          <Text style={{fontFamily: 'Arial', fontSize: 15}}>
            Login with Facebook
          </Text>
        </Icon.Button> */}
      </SafeAreaView>
    );
  }
}

export default Testbed;
