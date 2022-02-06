import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LeftArrowSVG} from '../../assets/svgs';
import {colors} from '../../theme/colors';
import { NavigationProps } from '../stack-navigator/types';

// interface NavProps {
//   push: (view: string, params?: any) => void;
//   replace: (view: string, params?: any) => void;
//   pop: (numberOfView?: number) => void;
//   goBack: () => void;
// }

interface HeaderProps {
  title: string;
  navigation: NavigationProps;
}

const Header: React.FC<HeaderProps> = ({title, navigation}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 16}}>
      <TouchableOpacity
        style={{width: 34, height: 34, padding: 8, paddingLeft: 8, paddingRight: 8,}}
        activeOpacity={0.5}
        onPress={navigation.goBack}>
        <LeftArrowSVG width={'100%'} height={'100%'} fill={colors.dark} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          color: colors.darkV2,
          fontSize: 26,
          fontWeight: '600',
          // marginLeft: 8,
        }}>{`${title}`}</Text>
    </View>
  );
};

export default Header;
