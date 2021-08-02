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
import axios from 'axios';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loadingInit: false,
      loadingMid: false,
    };
  }

  //fetch api movie list
  async movieList() {
    this.setState({loadingInit: true});
    try {
      const {data} = await axios.get('http://code.aldipee.com/api/v1/movies');
      data.results.sort((a, b) => a.title.localeCompare(b.title));
      this.setState({movies: data.results, loadingInit: false});
    } catch (error) {
      let err = 'Something went wrong';
      alert(err);
      this.setState({loading: false});
    }
  }

  componentDidMount() {
    this.movieList;
  }

  render() {
    const {data, loadingInit, loadingMid} = this.state;
    return (
      // background
      <View style={styles.background}>
        {/* container */}
        <View style={styles.container}>
          {loadingInit ? (
            <ActivityIndicator //activity indicator header
              size="large"
              color="#ffffff"
              animating={this.state.loading}
            />
          ) : (
            <FlatList //flatlist component
              data={data} //flatlist data
              keyExtractor={({id}, index) => id} //flatlist key extractor
              style={{}} //flatlist style
              //flatlist header
              ListHeaderComponent={
                loadingInit ? (
                  <ActivityIndicator //activity indicator header
                    size="large"
                    color="#ffffff"
                    animating={this.state.loading}
                  />
                ) : (
                  //initial fetch api button
                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      style={styles.buttonContainer}
                      onPress={() => this.movieList()}>
                      <Text style={{color: '#ffffff'}}>Press to fetch API</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
              //flatlist footer
              // ListFooterComponent={
              //   data.length > 0 && nextData !== null && !loadingMid ? (
              //     //fetch next page api button
              //     <View style={{alignItems: 'center'}}>
              //       <TouchableOpacity
              //         onPress={() => this.fetchNextPage(nextData)}
              //         style={{
              //           width: 100,
              //           height: 50,
              //           justifyContent: 'center',
              //           alignItems: 'center',
              //           marginBottom: 100,
              //           borderRadius: 10,
              //           backgroundColor: '#a9a9a9a9',
              //         }}>
              //         <Text>Show more</Text>
              //       </TouchableOpacity>
              //     </View>
              //   ) : loadingMid ? (
              //     //loading mid process
              //     <View style={{alignItems: 'center'}}>
              //       <ActivityIndicator
              //         size="large"
              //         color="#ffffff"
              //         animating={loadingMid}
              //       />
              //     </View>
              //   ) : nextData !== null ? (
              //     //no data
              //     <View style={{alignItems: 'center'}}>
              //       <Text style={{color: '#ffffff'}}>No data</Text>
              //     </View>
              //   ) : (
              //     //blank footer
              //     <View style={{alignItems: 'center'}}>
              //       <TouchableOpacity
              //         onPress={() => this.resetData()}
              //         style={{
              //           width: 100,
              //           height: 50,
              //           justifyContent: 'center',
              //           alignItems: 'center',
              //           marginBottom: 100,
              //           borderRadius: 10,
              //           backgroundColor: '#a9a9a9a9',
              //         }}>
              //         <Text>Reset data</Text>
              //       </TouchableOpacity>
              //     </View>
              //   )
              // }
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
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },

  container: {
    paddingHorizontal: 10,
    marginTop: 45,
    backgroundColor: `#808080`,
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
    width: 330,
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

export default Movies;
