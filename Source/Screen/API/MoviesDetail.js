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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class MoviesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesDetail: [],
      moviesID: this.props.route.params.moviesID,
      loading: false,
    };
  }

  _renderHeader() {
    return (
      <View styles={styles.headerContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              // backgroundColor: 'blue',
            }}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={50}
              color={'#ffffff'}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '85%',
              height: 50,
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#87ceeb',
            }}>
            <Text>Movie Information</Text>
          </View>
        </View>
      </View>
    );
  }

  //fetch api movie list
  async componentDidMount() {
    const {moviesID} = this.state;
    this.setState({loading: true});
    try {
      const {data} = await axios.get(
        `http://code.aldipee.com/api/v1/movies/${moviesID}`,
      );
      this.setState({moviesDetail: data, loading: false});
      //   console.log(JSON.stringify(data));
      // alert(JSON.stringify(data.credits.cast[0].name));
      // alert(JSON.stringify(data.overview));
    } catch (error) {
      let err = 'Something went wrong';
      alert(err);
      this.setState({loading: false});
    }
  }

  render() {
    const {moviesDetail, loading} = this.state;
    alert(JSON.stringify(moviesDetail.overview));
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          {this._renderHeader()}
          {loading ? (
            <ActivityIndicator //activity indicator header
              size="small"
              color="#ffffff"
              animating={loading}
            />
          ) : (
            <FlatList //flatlist component
              data={moviesDetail} //flatlist data
              keyExtractor={(item, index) => index} //flatlist key extractor
              style={{}} //flatlist style
              //flatlist render
              renderItem={({item, index}) => (
                <View
                  style={{backgroundColor: 'white', height: 100, width: 100}}>
                  <Image
                    style={{
                      width: 500,
                      height: 281,
                    }}
                    source={{uri: item.backdrop_path}}
                  />
                  <Text style={{color: '#ffffff'}}>{item.id}</Text>
                  <Text style={{color: 'blue'}}>TEST</Text>
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
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
    backgroundColor: '#000000',
  },

  container: {
    paddingHorizontal: 5,
    marginTop: 45,
    backgroundColor: 'pink',
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

  flatlistCard: {
    marginBottom: 10,
    marginHorizontal: 10,
    width: 330,
    height: 500,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 30,
    borderRadius: 10,
    backgroundColor: '#ffc0cb',
  },
});

export default MoviesDetail;
