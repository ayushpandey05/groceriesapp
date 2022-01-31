import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import createStackNavigator from '../../components/stack-navigator';
import useMultiState from '../../hooks/useMultiState';
import Login from '../login';
import Welcome from '../welcome';

const MainStack = createStackNavigator(
  {
    home: {
      screen: ({navigation}) => {
        const onPress = () => {
          navigation.push('profile', {test: 'Hello'});
        };
        return (
          <View style={{flex: 1, backgroundColor: 'red'}}>
            <TouchableOpacity onPress={onPress}>
              <Text>Open Profile</Text>
            </TouchableOpacity>
          </View>
        );
      },
    },
    profile: {
      screen: ({navigation}) => {
        return (
          <View style={{flex: 1, backgroundColor: 'blue'}}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Text>OPen home</Text>
            </TouchableOpacity>
          </View>
        );
      },
    },
    welcome: {
      screen: Welcome,
    },
    login: {
      screen: Login,
    },
  },
  'welcome',
);

export default MainStack;
