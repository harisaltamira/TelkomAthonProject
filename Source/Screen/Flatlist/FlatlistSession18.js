import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';

class FlatlistSession18 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Focus',
          season: 12,
        },
        {
          id: 2,
          name: 'Happiness',
          season: 10,
        },
        {
          id: 3,
          name: 'Goodnight',
          season: 15,
        },
        {
          id: 4,
          name: 'Goodnight',
          season: 15,
        },
      ],
    };
  }

  renderItem = () => {};

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                margin: 10,
                width: 100,
                height: 200,
                borderRadius: 10,
                borderWidth: 1,
                backgroundColor: 'blue',
              }}>
              <Text style={{color: 'white'}}>{item.name}</Text>
              <Text style={{color: 'white'}}>{item.season}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Text>component works</Text>
      </View>
    );
  }
}

export default FlatlistSession18;
