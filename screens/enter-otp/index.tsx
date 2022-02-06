import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {CountryLogo, LoginLogo2, RightArrowImgIcon} from '../../assets/images';
import {RightArrowSVG, LeftArrowSVG} from '../../assets/svgs';
import Fab from '../../components/fab';
import Header from '../../components/header';
import {NavigationProps} from '../../components/stack-navigator/types';
import {colors} from '../../theme/colors';

const title = `Enter your 4-digit code`;
const inputLabel = `Mobile Number`;

interface Props {
  navigation: NavigationProps;
}

const EnterOtp: React.FC<Props> = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute', width: '100%', height: '100%'}}>
        <Image style={{width: '100%'}} source={LoginLogo2} />
      </View>
      <View style={{flex: 1, marginHorizontal: '5%'}}>
        <Header title={title} navigation={navigation} />
        <View style={{flex: 1, marginTop: 200}}>
          <Text style={{color: colors.greyV3, fontSize: 16, fontWeight: '600'}}>
            {inputLabel}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 14,
              borderBottomColor: colors.greyV2,
              borderBottomWidth: 1,
              alignItems: 'center',
            }}>
            <Image source={CountryLogo} />
            <Text style={{color: colors.darkV2, fontSize: 18, marginLeft: 8}}>
              {'+880'}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <TextInput
                keyboardType="number-pad"
                style={{width: '100%', marginLeft: 4, fontSize: 18, padding: 0}}
                autoFocus
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <TouchableOpacity >
            <Text style={{color: colors.primary, fontSize: 18}}>
              {'Resend Code'}
            </Text>
          </TouchableOpacity>
          <Fab onPress={()=>{
            navigation.push('mainTabScreen')
          }} icon={RightArrowSVG} iconProps={{fill: colors.light}} />
        </View>
      </View>
    </View>
  );
};

export default EnterOtp;
