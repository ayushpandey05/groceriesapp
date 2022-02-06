import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import useUniqueId from '../../hooks/useUniqueId';
import {colors} from '../../theme/colors';
import {favouriteData} from './data';

interface Props {}

const Favourite: React.FC<Props> = () => {
  const screenId = useUniqueId();
  return (
    <View style={styles.container}>
      <FlatList
        data={favouriteData}
        numColumns={2}
        renderItem={({item, index}) => {
          const {label, logo}=item
          return (
            <TouchableOpacity
              key={`${screenId}-${index}`}
              activeOpacity={0.5}>
                <Image source={logo} />
                <Text style={{fontSize: 16, fontWeight: '600'}} >{label}</Text>
              </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {color: colors.dark},
});
