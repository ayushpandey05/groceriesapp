import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../theme/colors';

interface Props {}

const Shop: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Shop screen`}</Text>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {color: colors.dark},
});
