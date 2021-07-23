import React, { Component } from 'react';
import {
    SafeAreaView,
    Text,
    Button,
    FlatList,
    View,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import ExampleFlatlist from '../Test/FlatlistMikhael';
import Spinner from 'react-native-loading-spinner-overlay';



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //state
            isLoading: false,
            data: []
        }
        const { params } = this.props.route;
        const name = params ? params.data.username : null;
        this.state.username = name
        this.response = []
    }

    componentDidMount() {
        this.onFetchMe()
    }

    onFetchMe() {
        this.setState({ isLoading: true })
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState(
                    {
                        isLoading: false,
                        data: responseJson,
                    },
                    () => {
                        this.response = responseJson;
                        alert(JSON.stringify(this.response))
                    },
                );
            })
            .catch(error => {
                console.error(error);
                alert('Something Went Wrong')
            });
    }

    render() {
        const { isLoading, data } = this.state;
        console.log(this.state.data, 'line 83')
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <Spinner
                    visible={isLoading}
                    textContent={'Loading...'}
                />
                <TouchableOpacity onPress={() => this.onFetchMe()}>
                    <Text>
                        Fetch me !!
                        </Text>
                </TouchableOpacity>
                <Text style={{fontSize : 16, fontWeight : 'bold'}}>List Characters Star Wars</Text>
                <FlatList
                    data={data.results}
                    renderItem={({ item, index }) => (
                        <View style={{margin: 10}}>
                            <Text style={{fontSize : 16}}>{index + 1}.{item.name}</Text>
                            <Text style={{marginLeft : 5}}>Gender : {item.gender}</Text>
                            <Text style={{marginLeft : 5}}>Height : {item.height}</Text>
                            <Text style={{marginLeft : 5}}>Hair Color : {item.hair_color}</Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        )
    }

}
const styles = StyleSheet.create({
    textBlue: {
        color: 'blue',
        fontSize: 14,
        fontWeight: 'bold'
    },
    textBlack: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    }
})

export default Home

