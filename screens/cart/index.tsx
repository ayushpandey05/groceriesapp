import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Button from '../../components/button';
import useUniqueId from '../../hooks/useUniqueId';
import {colors} from '../../theme/colors';
import cartData from './cartData';
import CartItem from './CartItem';

interface Props {
  screenState: any;
  setScreenState: any;
}

const Cart: React.FC<Props> = ({screenState, setScreenState}) => {
  const screenId = useUniqueId();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`My Cart`}</Text>
      <FlatList
      contentContainerStyle={{paddingBottom: 100}}
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem key={`${screenId}-${index}`} item={item} index={index} />
          );
        }}
      />
      <View
        style={{
          position: 'absolute',
          paddingHorizontal: 20,
          paddingVertical: 16,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <Button label="Go to Checkout" />
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {
    color: colors.darkV2,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: 8,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyV2,
  },
});
