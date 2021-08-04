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

class MoviesDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moviesDetail: [],
      moviesID: this.props.route.params.moviesID,
      loading: false,
      loadingMid: false,
    };
  }

  //fetch api movie list
  async componentDidMount() {
    const {moviesID} = this.state;
    this.setState({loading: true});
    try {
      const {data} = await axios.get(
        `http://code.aldipee.com/api/v1/movies/${moviesID}`,
      );
      this.setState({moviesDetail: data.results, loading: false});
      //   console.log(JSON.stringify(data));
      alert(JSON.stringify(data.credits.cast[0].name));
    } catch (error) {
      let err = 'Something went wrong';
      alert(err);
      this.setState({loading: false});
    }
  }

  render() {
    // console.log(this.state.moviesID);
    return <Text>TEST</Text>;
    this.props.navigation.goBack();
  }
}

export default MoviesDetail;
