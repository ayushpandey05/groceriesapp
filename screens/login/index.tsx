import React from 'react';
import {Image, Text, View} from 'react-native';
import {CountryLogo, LoginLogo} from '../../assets/images';
import Button from '../../components/button';
import {colors} from '../../theme/colors';

const title = `Get your groceries with nectar`;

const helpText = `Or connect with social media`;

const Login = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Image source={LoginLogo} />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: '600',
            color: colors.darkV1,
            maxWidth: '70%',
            marginHorizontal: '8%',
            marginBottom: 30,
          }}>
          {title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 14,
            marginHorizontal: '8%',
            borderBottomColor: colors.greyV2,
            borderBottomWidth: 1
          }}>
          <Image source={CountryLogo} />
          <Text style={{marginLeft: 8, color: colors.darkV1, fontSize: 18}} >+880</Text>
        </View>
        <Text
          style={{
            color: colors.greyV1,
            fontWeight: '600',
            fontSize: 14,
            textAlign: 'center',
            marginHorizontal: '8%',
            marginBottom: 37,
            marginTop: 40,
          }}>
          {helpText}
        </Text>
        <Button
          style={{
            marginHorizontal: '8%',
            marginBottom: 20,
            backgroundColor: colors.secondaryV1,
          }}
          label="Continue with Google"
        />
        <Button
          style={{
            marginHorizontal: '8%',
            marginBottom: '10%',
            backgroundColor: colors.secondaryV2,
          }}
          label="Continue with Facebook"
        />
      </View>
    </View>
  );
};

export default Login;
