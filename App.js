import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDy9ufVSPRkqny0uBvNQ_1E1i18eY3G1C8",
      authDomain: "auth-59067.firebaseapp.com",
      databaseURL: "https://auth-59067.firebaseio.com",
      projectId: "auth-59067",
      storageBucket: "auth-59067.appspot.com",
      messagingSenderId: "733856123801"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication App" />
        <Text> Rama1 </Text>
      </View>
    );
  }
}
