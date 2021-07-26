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
} from 'react-native';

class FlatlistStarWars extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      response: '',
      loadingInit: false,
      loadingMid: false,
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

  //initial fetch api function
  fetch() {
    this.setState({loadingInit: true});
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            loadingInit: false,
            data: responseJson.results,
            nextData: responseJson.next,
          },
          () => {
            // this.nextData = responseJson.next;
            // alert(JSON.stringify(this.nextData));
          },
        );
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong');
      });
  }

  //next page fetch api function
  fetchNextPage(nextDataUrl) {
    this.setState({loadingMid: true});
    fetch(nextDataUrl)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            loadingMid: false,
            data: [...this.state.data, ...responseJson.results],
            nextData: responseJson.next,
          },
          () => {
            // this.response = responseJson;
            // alert(JSON.stringify(this.response));
          },
        );
      })
      .catch(error => {
        console.error(error);
        alert('Something went wrong');
      });
  }

  resetData() {
    return () => (this.state.data = null);
  }

  render() {
    const {data, nextData, loadingInit, loadingMid} = this.state;
    return (
      // screen container
      <View style={styles.container}>
        <FlatList //flatlist component
          data={data} //flatlist data
          style={{}} //flatlist style
          //flatlist key extractor
          keyExtractor={(item, index) => index.toString()}
          //flatlist header
          ListHeaderComponent={
            loadingInit ? (
              <ActivityIndicator //activity indicator header
                size="large"
                color="#000000"
                animating={this.state.loading}
              />
            ) : (
              //initial fetch api button
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.fetch()}>
                  <Text style={{color: '#ffffff'}}>Press to fetch API</Text>
                </TouchableOpacity>
              </View>
            )
          }
          //flatlist footer
          ListFooterComponent={
            data.length > 0 && nextData !== null && !loadingMid ? (
              //fetch next page api button
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.fetchNextPage(nextData)}
                  style={{
                    width: 100,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 100,
                    borderRadius: 10,
                    backgroundColor: '#a9a9a9a9',
                  }}>
                  <Text>Show more</Text>
                </TouchableOpacity>
              </View>
            ) : loadingMid ? (
              //loading mid process
              <View style={{alignItems: 'center'}}>
                <ActivityIndicator
                  size="large"
                  color="#000000"
                  animating={loadingMid}
                />
              </View>
            ) : nextData !== null ? (
              //no data
              <View style={{alignItems: 'center'}}>
                <Text style={{color: '#808080'}}>No data</Text>
              </View>
            ) : (
              //blank footer
              // <View style={{marginBottom: 90}}></View>
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => this.resetData()}
                  style={{
                    width: 100,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 100,
                    borderRadius: 10,
                    backgroundColor: '#a9a9a9a9',
                  }}>
                  <Text>Reset data</Text>
                </TouchableOpacity>
              </View>
            )
          }
          //flatlist render
          renderItem={({item, index}) => (
            <View style={styles.flatlistCard}>
              <Text style={styles.flatlistCardText}>
                ID {'\t\t'} : {'\t'} {index + 1} {'\n'}
                Name {'\t'} : {'\t'} {item.name} {'\n'}
                Gender {'\t'} : {'\t'} {item.gender} {'\n'}
                Height {'\t'} : {'\t'} {item.height} cm {'\n'}
                Mass {'\t'} : {'\t'} {item.mass} Kg
              </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
    paddingHorizontal: 10,
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
    height: 100,
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
