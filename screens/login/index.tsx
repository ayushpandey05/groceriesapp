import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import {CountryLogo, LoginLogo} from '../../assets/images';
import Button from '../../components/button';
import {NavigationProps} from '../../components/stack-navigator/types';
import {colors} from '../../theme/colors';

const title = `Get your groceries with nectar`;

const helpText = `Or connect with social media`;

interface Props {
  navigation: NavigationProps;
}

const Login: React.FC<Props> = ({navigation}) => {
  const onPress = () => {
    navigation.push('enterNumber');
  };

  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Image style={{width: '100%'}} source={LoginLogo} />
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
            borderBottomWidth: 1,
            alignItems: 'center',
          }}>
          <Image source={CountryLogo} />
          <Text style={{marginLeft: 8, color: colors.darkV1, fontSize: 18}}>
            +880
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
              onFocus={onPress}
                keyboardType="number-pad"
                style={{width: '100%', marginLeft: 4, fontSize: 18}}
              />
            </View>
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
          onPress={onPress}
          style={{
            marginHorizontal: '8%',
            marginBottom: 20,
            backgroundColor: colors.secondaryV1,
          }}
          label="Continue with Google"
        />
        <Button
          onPress={onPress}
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
