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
  Dimensions,
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
          <View
            style={{
              width: Dimensions.get('window').width,
              height: 50,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              // backgroundColor: '#87ceeb',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
                // backgroundColor: 'blue',
              }}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={50}
                color={'#ffffff'}
              />
            </TouchableOpacity>
            <Text
              style={{
                width: '70%',
                textAlign: 'center',
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ffffff',
                paddingLeft: 20,
              }}>
              MOVIE INFORMATION
            </Text>
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
    // alert(JSON.stringify(moviesDetail.overview));
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
            <ScrollView>
              <Image
                style={{
                  width: Dimensions.get('window').width,
                  height: 570,
                  marginBottom: 10,
                  resizeMode: 'contain',
                }}
                source={{uri: moviesDetail.poster_path}}
              />
              <View style={{alignItems: 'center'}}>
                <Text style={styles.contentDescriptionText}>
                  Title {'\t\t'} : {moviesDetail.title}
                </Text>
                <Text style={styles.contentDescriptionText}>
                  Language {'\t'} : {moviesDetail.original_language}
                </Text>
                <Text style={styles.contentDescriptionText}>
                  Release date {'\t'} : {moviesDetail.release_date}
                </Text>
                <Text style={styles.contentDescriptionText}>
                  Duration {'\t\t'} : {moviesDetail.runtime} mins
                </Text>
                <Text style={styles.contentDescriptionText}>
                  Rating {'\t\t'} : {moviesDetail.vote_average} / 10
                </Text>
                <Text style={styles.contentDescriptionText}>
                  Synopsis {'\t\t'} : {moviesDetail.overview}
                </Text>
              </View>
              <FlatList
                data={moviesDetail.credits ? moviesDetail.credits.cast : []}
                keyExtractor={(item, index) => index}
                style={{paddingVertical: 20}}
                horizontal={true}
                renderItem={({item, index}) => (
                  <View>
                    <Image
                      style={{
                        width: 75,
                        height: 75,
                        marginBottom: 5,
                        marginHorizontal: 5,
                        borderRadius: 50,
                      }}
                      source={{uri: item.profile_path}}
                    />
                    <Text style={styles.castDescriptionText}>{item.name}</Text>
                    <Text style={styles.castDescriptionText}>as</Text>
                    <Text style={styles.castDescriptionText}>
                      {item.character}
                    </Text>
                  </View>
                )}
              />
            </ScrollView>
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
    backgroundColor: '#000000',
  },

  container: {
    marginTop: 30,
    paddingBottom: 100,
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

  contentDescriptionText: {
    width: '85%',
    marginBottom: 10,
    marginHorizontal: 20,
    color: '#ffffff',
  },

  castDescriptionText: {
    width: 75,
    marginBottom: 5,
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default MoviesDetail;
