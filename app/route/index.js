import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator,createStackNavigator, createAppContainer, } from 'react-navigation';
import newfeed from './../screen/Newfeed'
import CourseScreen from './../screen/Course'
import settingScreen from './../screen/Setting'
import curriculumScreen from './../screen/Curriculum'
import ProfileScreen from './../screen/Login'
import chatScreen from './../screen/Newfeed/chat'
import NotificationScreen from './../screen/Newfeed/Notification'

const NewFeedStack=createStackNavigator({
   Newfeed:newfeed,
   chat: chatScreen,
   Notification: NotificationScreen,
})

const appTabs=createBottomTabNavigator({
  Newfeed: NewFeedStack,
  Course: CourseScreen,
  Curriculum: curriculumScreen,
  Setting: settingScreen,
  Profile: ProfileScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Newfeed') {
        iconName = `ios-paper${focused ? '' : ''}`;
      } else if (routeName === 'Course') {
        iconName = `ios-school${focused ? '' : ''}`;
      } else if (routeName == 'Setting'){
        iconName = `ios-settings${focused ? '' : ''}`;
      }else if (routeName == 'Curriculum'){
      iconName = `ios-albums${focused ? '' : ''}`;
      }else if (routeName == 'Profile'){
        iconName = `ios-contacts${focused ? '' : ''}`;
        }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  
  tabBarOptions: {
    activeTintColor: '#66ccff',
    inactiveTintColor: '#1ab2ff',
  },
}
)
export default createAppContainer(appTabs);

  
