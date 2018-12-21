import React, { Component } from 'react';
import { View, Text,WebView, Image, TouchableOpacity, Header, Button } from 'react-native';
import styles from './../../style'
import Icon from 'react-native-vector-icons/Ionicons';
import chat from './chat'
export default class newfeed extends Component {
  onChat=()=>{
    this.props.navigation.navigate("chat")
  }
  onNotification=()=>{
    this.props.navigation.navigate("Notification")
  }
  static navigationOptions = {
    headerTitle: "ComputerScience",
  }
  render() {
    return (
      //===Header====
      <View style={styles.header}>
        <TouchableOpacity onPress={this.onNotification}>
        <Icon size={25} style={styles.icon} name="ios-notifications" />
        </TouchableOpacity>
        <Text style={styles.font}>  </Text>
          <TouchableOpacity onPress={this.onChat}>
          <Icon size={25} style={styles.icon} name="ios-chatbubbles" />
          </TouchableOpacity>
      </View>

      //====Body===s
    );
  }
}

