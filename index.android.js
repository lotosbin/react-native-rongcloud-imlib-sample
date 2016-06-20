/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NativeModules,
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import RongCloud from 'react-native-rongcloud-imlib'
class sample extends Component {
  _onPressInitWithKey(){
    RongCloud.initWithAppKey('8luwapkvu3bbl');
  }
  _onPressConnect(){
    RongCloud.connectWithToken('mPNDiKGpZlybEcWWrrQLT34jZh3+cDN8iZJS89BmLHSxeV2vGefG93bnXmX9jtFQAllnoWFRVbSKyoYSdfd52g==');
  }
  _onPressReceive(){
    RongCloud.onReceived(()=> {
      console.warn("received");
    });
  }
  _onPressSendMessage(){
    RongCloud.sendTextMessage(RongCloud.ConversationType.PRIVATE,"1","hello");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight onPress={this._onPressInitWithKey}><Text>initWithKey</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._onPressConnect}><Text>Connect</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._onPressReceive}><Text>Receive</Text></TouchableHighlight>
        <TouchableHighlight onPress={this._onPressSendMessage}><Text>SendMessage</Text></TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sample', () => sample);
