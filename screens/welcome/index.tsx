import React from 'react';
import {ImageBackground, Text} from 'react-native';
import {WelcomeLogo} from '../../assets/images';
import Button from '../../components/button';

const title = `Welcome to our store`;
const subTitle = `Ger your groceries in as fast as one hour`;

const Welcome = ({navigation}) => {
  const goToLoginScreen = () => {
    navigation.push('login');
  };

  return (
    <ImageBackground
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
      }}
      resizeMode="stretch"
      source={WelcomeLogo}>
      <Text
        style={{
          fontSize: 48,
          color: 'white',
          textAlign: 'center',
        }}>
        {title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: 'white',
          textAlign: 'center',
          marginTop: 0,
          marginBottom: 40,
        }}>
        {subTitle}
      </Text>

      <Button
        onPress={goToLoginScreen}
        style={{marginBottom: 70, marginHorizontal: '8%'}}
        label="Get Started"
      />
    </ImageBackground>
  );
};

export default Welcome;
