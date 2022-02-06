import React from 'react';
import {View, FlatList, TouchableOpacity, Text, Image} from 'react-native';
import useUniqueId from '../../hooks/useUniqueId';
import {colors} from '../../theme/colors';
import exploreItemsData from './exploreItemsData';
import Header from '../../components/header'
import Fab from '../../components/fab';
import { AddSVG } from '../../assets/svgs';
const ExploreItems = ({navigation, params}) => {
  const screenId = useUniqueId();

  const renderHeader = ()=>{
      return <Header navigation={navigation} title={params.label} />
  }
  return (
    <View style={{flex: 1}}>
        <View style={{paddingHorizontal: 12}}>
        {renderHeader()}
        </View>
      <FlatList
        contentContainerStyle={{paddingVertical: 15, paddingHorizontal: 20}}
        numColumns={2}
        data={exploreItemsData}
        renderItem={({item, index}) => {
          const {title,subTitle ,price, pricePrefix, logo} = item;
          return (
            <View
              key={`${screenId}-${index}`}
              style={{width: '50%', padding: 7}}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderColor: colors.greyV2,
                //   alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 10,
                  borderRadius: 18,
                }}>
                <Image source={logo} style={{marginBottom: 16, alignSelf:'center'}} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: colors.darkV2,
                  }}>
                  {title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    // fontWeight: '600',
                    color: colors.greyV3,
                  }}>
                  {subTitle}
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                    <Text style={{fontSize: 18, fontWeight: '600', color: colors.darkV2}} >{`${pricePrefix}${price}`}</Text>
                    <Fab icon={AddSVG} iconProps={{width: 17, height: 17}} style={{width: 45, height: 45, borderRadius: 16}} />
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ExploreItems;
