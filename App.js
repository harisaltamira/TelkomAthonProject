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
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Login from './Source/Screen/Login/Login';
import BottomTabsNavigation from './Source/Screen/BottomTabsNavigatior/BottomTabsNavigation';
import Register from './Source/Screen/Register/Register';
import Home from './Source/Screen/Home/Home';
import MoviesDetail from './Source/Screen/API/MoviesDetail';
import MovieReducers from './Source/Redux/ReduxMovies/Reducers';

const Stack = createStackNavigator();

const allReducers = combineReducers({
  MovieReducers: MovieReducers,
});

const store = createStore(allReducers, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="BottomTabsNavigation"
            component={BottomTabsNavigation}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Movies Detail" component={MoviesDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
