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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: 'Text pertama',
        },
        {
          id: 2,
          title: 'Text kedua',
        },
        {
          id: 3,
          title: 'Text ketiga',
        },
        {
          id: 4,
          title: 'Text keempat',
        },
        {
          id: 5,
          title: 'Text kelima',
        },
        {
          id: 6,
          title: 'Text keenam',
        },
        {
          id: 7,
          title: 'Text ketujuh',
        },
      ],
      name: '',
      id: '',
    };

    const {params} = this.props.route;
    const name = params ? params.data : null;
    this.state.username = name;
  }

  renderItem = () => {};

  render() {
    const {username, data} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <Text>Selamat datang</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={styles.backToLoginButton}>
          <Text style={styles.backToLoginButtonText}>Back to login screen</Text>
        </TouchableOpacity>

        <FlatList
          data={data}
          numColumns={3}
          renderItem={({item}) => (
            <View style={{margin: 10}}>
              <TouchableOpacity onPress={() => this.setState({id: item.id})}>
                <View
                  style={{
                    height: 30,
                    width: 100,
                    borderWidth: 1,
                    borderColor: 'black',
                    borderRadius: 10,
                    backgroundColor: 'grey',
                  }}>
                  <Text
                    style={
                      this.state.id === item.id
                        ? styles.textBlue
                        : styles.textWhite
                    }>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },

  backToLoginButton: {
    width: 200,
    height: 30,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  backToLoginButtonText: {
    color: 'white',
  },

  textBlue: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 'bold',
  },

  textWhite: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Home;
