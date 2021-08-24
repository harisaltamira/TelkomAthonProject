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
  Platform,
} from 'react-native';
import Modal from 'react-native-modal';
import {NotificationService} from '../Service/Notification';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const {params} = this.props.route;
    const name = params ? params.data : null;
    this.state.username = name;
  }

  notificationTrigger() {
    if (Platform.OS == 'ios') {
      //notification for ios
      NotificationService.onSendNotificationIos();
    } else {
      NotificationService.configure();
      NotificationService.createChannel('1');
      NotificationService.sendNotification('1', 'test', 'test works');
    }
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
        <TouchableOpacity
          onPress={() => this.notificationTrigger()}
          style={{
            width: 180,
            height: 50,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'pink',
          }}>
          <Text>Local Notification</Text>
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
