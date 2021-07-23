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

class FlatlistStarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson)
        this.setState({
          data: responseJson.results,
        });
      });
  }

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={{width: '100%'}}
          data={data}
          renderItem={({item, index}) => (
            <Text>
              Name: {item.name}
              {'\n'}
              Height: {item.height}
              {'\n'}
              Mass: {item.mass}
              {'\n'}
              {'\n'}
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
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
    paddingHorizontal: 30,
  },
});

export default FlatlistStarWars;
