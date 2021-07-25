import {Spinner} from 'native-base';
import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
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
      data: [],
      response: '',
      loading: false,
    };
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

  fetchNextPage() {
    this.setState({loading: true});
    fetch('https://swapi.dev/api/people/?page=2')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
          data: responseJson.results,
          nextData: responseJson.next,
        });
      });
  }

  // componentDidMount() {
  fetch() {
    this.setState({loading: true});
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            loading: false,
            data: responseJson.results,
            nextData: responseJson.next,
          },
          // () => {
          //   this.response = responseJson;
          //   // alert(JSON.stringify(this.response));
          // },
        );
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong');
      });
  }

  render() {
    const {data, loading} = this.state;
    return (
      //screen container
      <SafeAreaView style={styles.container}>
        {/* flatlist component */}
        <FlatList
          style={{}}
          keyExtractor={(item, index) => index.toString()}
          // fetch api button
          ListHeaderComponent={
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => this.fetch()}>
                <Text style={{color: '#ffffff'}}>Press to fetch API</Text>
              </TouchableOpacity>
            </View>
          }
          //flatlist footer
          ListFooterComponent={
            //footer fetch next page api
            <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => this.fetchNextPage()}
                style={{
                  width: 100,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                  backgroundColor: '#a9a9a9a9',
                }}>
                <View>
                  <Text>More</Text>
                </View>
              </TouchableOpacity>
            </View>
          }
          //flatlist data
          data={data}
          //flatlist render
          renderItem={({item, index}) => (
            <View style={{}}>
              <View style={styles.flatlistCard}>
                <Text style={styles.flatlistCardText}>
                  Name {'\t'} : {'\t'} {item.name}
                  {'\n'}
                  Height {'\t'} : {'\t'} {item.height} cm
                  {'\n'}
                  Mass {'\t'} : {'\t'} {item.mass} Kg
                </Text>
              </View>
            </View>
          )}
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
    marginBottom: 100,
    paddingHorizontal: 30,
  },

  buttonContainer: {
    width: 180,
    height: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  flatlistContainer: {
    width: '100%',
  },

  flatlistCard: {
    marginBottom: 10,
    marginHorizontal: 10,
    width: 350,
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  flatlistCardText: {
    color: '#ffffff',
  },
});

export default FlatlistStarWars;
