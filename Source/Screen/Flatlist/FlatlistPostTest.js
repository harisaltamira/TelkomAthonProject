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
  Linking,
} from 'react-native';
import data from '../../../Data/data.json';

class FlatlistPostTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data.data.categoryAllList.categories,
      childShow: false,
      grandChildShow: false,
    };
    this.temp = this.state.data;
  }

  searchData(text) {
    const newData = this.temp.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
      childShow: false,
      grandChildShow: false,
    });
  }

  _renderChild(indexParent) {
    const {data, childShow} = this.state;
    if (childShow === indexParent) {
      return (
        <FlatList
          style={{width: '100%'}}
          data={data[indexParent].child}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    grandChildShow:
                      this.state.grandChildShow === index ? false : index,
                  })
                }
                style={styles.childContainer}>
                <View style={styles.childTextContainer}>
                  <Text style={styles.childText}>{item.name}</Text>
                  <Text style={styles.childText}>{item.child.length} Subs</Text>
                </View>
              </TouchableOpacity>
              {this._renderGrandChild(index, indexParent)}
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return null;
    }
  }

  _renderGrandChild(indexParent, indexGrandParent) {
    const {data, grandChildShow} = this.state;
    if (grandChildShow === indexParent) {
      return (
        <FlatList
          style={{
            width: '100%',
            height: 205,
            paddingTop: 1,
          }}
          horizontal={true}
          data={data[indexGrandParent].child[indexParent].child}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => Linking.openURL(item.url)}
              style={{
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginHorizontal: 1,
                paddingTop: 30,
                borderRadius: 10,
                backgroundColor: '#a9a9a9',
              }}>
              <View style={styles.grandChildContainer}>
                <Image
                  style={{
                    width: 150,
                    height: 150,
                  }}
                  source={{uri: item.iconImageUrl}}
                />
                <View style={{padding: 5}}>
                  <Text style={styles.grandChildText}>{item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const {data} = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* flatlist component */}
        <FlatList
          style={{width: '100%'}}
          keyExtractor={(item, index) => index.toString()}
          data={data}
          showsVerticalScrollIndicator={false}
          //flatlist header
          ListHeaderComponent={
            //flatlist search
            <View
              style={{
                paddingVertical: 10,
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                onChangeText={this.searchData.bind(this)}
                style={{
                  width: '100%',
                  height: 40,
                  marginVertical: 5,
                  paddingHorizontal: 20,
                  color: '#000000',
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: '#2bb3e0',
                }}
                placeholder="Search category"
                placeholderTextColor="#a9a9a9"></TextInput>
            </View>
          }
          //flatlist render
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    grandChildShow: false,
                    childShow: this.state.childShow === index ? false : index,
                  })
                }
                style={styles.parentContainer}>
                <SafeAreaView style={styles.parentTextContainer}>
                  <Text style={styles.parentText}>{item.name}</Text>
                  <Text style={styles.parentText}>
                    {item.child.length} Subs
                  </Text>
                </SafeAreaView>
              </TouchableOpacity>
              {this._renderChild(index)}
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
    marginHorizontal: 10,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  parentContainer: {
    width: '100%',
    height: 35,
    marginVertical: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#2bb3e0',
  },

  childContainer: {
    width: '100%',
    height: 35,
    marginVertical: 1,
    paddingLeft: 40,
    paddingRight: 20,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: `#808080`,
  },

  grandChildContainer: {
    width: 200,
    height: 150,
    marginTop: 1,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  parentTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  childTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  parentText: {
    color: '#ffffff',
  },

  childText: {
    color: '#ffffff',
  },

  grandChildText: {
    color: '#000000',
  },
});

export default FlatlistPostTest;
