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
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {fetchMovie} from '../../Redux/ReduxMovies/Action';
import {connect} from 'react-redux';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  //fetch api movie list
  async movieList() {
    this.setState({loading: true});
    try {
      const {data} = await axios.get('http://code.aldipee.com/api/v1/movies');
      // data.results.sort((a, b) => a.title.localeCompare(b.title));
      this.setState({movies: data.results, loading: false});
      // console.log(JSON.stringify(data.results[0]));
      // alert(JSON.stringify(data.results[0]));
    } catch (error) {
      let err = 'Something went wrong';
      alert(err);
      this.setState({loading: false});
    }
  }

  // load initial data
  async componentDidMount() {
    // this.movieList();
    this.props.fetchMovie();
  }

  render() {
    // const {movies, loading} = this.state;
    const {dataMovie, loading} = this.props;
    alert(JSON.stringify(dataMovie));
    return (
      // background
      <View style={styles.background}>
        {/* container */}
        <View style={styles.container}>
          <Text
            style={{
              paddingBottom: 10,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: '#ffffff',
            }}>
            MOVIES
          </Text>
          {loading ? (
            <ActivityIndicator //activity indicator header
              size="small"
              color="#ffffff"
              animating={loading}
            />
          ) : (
            <FlatList //flatlist component
              data={dataMovie} //flatlist data
              keyExtractor={({id}, index) => id} //flatlist key extractor
              style={{}} //flatlist style
              //flatlist render
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('Movies Detail', {
                      moviesID: item.id,
                    })
                  }>
                  <View style={styles.flatlistCard}>
                    <Image
                      style={{
                        // width: 500, //original poster jpeg dimension
                        // height: 750,
                        width: Dimensions.get('window').width,
                        height: 562,
                        borderRadius: 30,
                        resizeMode: 'contain',
                      }}
                      source={{uri: item.poster_path}}
                    />
                    <View style={styles.flatlistSubCard}>
                      <Text style={styles.flatlistCardText}>
                        1. Title {'\t\t\t'} : {item.original_title}
                      </Text>
                      <Text style={styles.flatlistCardText}>
                        2. Release date {'\t'} : {item.release_date}
                      </Text>
                      <Text style={styles.flatlistCardText}>
                        3. Rating {'\t\t\t'} : {item.vote_average} / 10
                      </Text>
                      <Text style={styles.flatlistCardText}>
                        4. Popularity {'\t\t'} : {item.popularity}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
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
    justifyContent: 'flex-start',
    backgroundColor: '#000000',
  },

  container: {
    marginTop: 40,
    backgroundColor: '#000000',
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
    marginBottom: 50,
    width: Dimensions.get('window').width,
    height: 650,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: '#ffc0cb',
  },

  flatlistSubCard: {
    width: Dimensions.get('window').width,
    paddingLeft: '20%',
    paddingTop: '1%',
  },

  flatlistCardText: {
    fontSize: 15,
    color: '#ffffff',
  },
});

const mapStateToProps = state => {
  const {dataMovie, loading} = state;
  return {dataMovie, loading};
};

export default connect(mapStateToProps, {fetchMovie})(Movies);
