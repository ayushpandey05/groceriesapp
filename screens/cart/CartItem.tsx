import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AddSVG, CrossSVG, SubtractSVG} from '../../assets/svgs';
import Fab from '../../components/fab';
import {colors} from '../../theme/colors';

interface Props {
  item: any;
  index: number;
}

const renderFab = ({icon, onPress, color = colors.primary}: any) => {
  return (
    <Fab
      onPress={onPress}
      icon={icon}
      iconProps={{width: 17, height: 17, fill: color}}
      style={{
        width: 46,
        height: 46,
        borderRadius: 18,
        borderColor: colors.greyV5,
        borderWidth: 1,
        backgroundColor: colors.transparent,
      }}
    />
  );
};

const CartItem: React.FC<Props> = ({item, index}) => {
  const {label, info, logo, price, pricePrefix, quantity} = item;
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 30,
        borderBottomWidth: 1,
        borderBottomColor: colors.greyV2,
      }}>
      <View
        style={{
          width: 80,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 30,
        }}>
        <Image source={logo} resizeMode="contain" />
      </View>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 16, fontWeight: '600', color: colors.darkV2}}>
            {label}
          </Text>
          <Text style={{fontSize: 14, color: colors.greyV3}}>{info}</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          {renderFab({icon: SubtractSVG, color: colors.greyV6})}
          <Text
            style={{
              marginHorizontal: 12,
              fontSize: 16,
              fontWeight: '600',
              color: colors.darkV2,
            }}>
            {quantity}
          </Text>
          {renderFab({icon: AddSVG})}
        </View>
      </View>
      <View style={{justifyContent: 'space-between'}}>
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <CrossSVG />
        </TouchableOpacity>
        <Text
          style={{
            color: colors.darkV2,
            fontSize: 18,
            fontWeight: '600',
            marginBottom: 8,
          }}>{`${pricePrefix}${price}`}</Text>
      </View>
    </View>
  );
};

export default CartItem;
