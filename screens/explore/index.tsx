import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import useDidMount from '../../hooks/useDidMount';
import useUniqueId from '../../hooks/useUniqueId';
import {colors} from '../../theme/colors';
import {exploreData} from './data';

interface Props {
  navigation: any;
}

const randomColors = [
  '#53B175',
  '#F8A44C',
  '#F7A593',
  '#D3B0E0',
  '#FDE598',
  '#B7DFF5',
];

const getIndexWiseColor = (index: number) => {
  let finalIndex = index;
  if (finalIndex > randomColors.length - 1) {
    finalIndex = finalIndex % randomColors.length;
  }

  return randomColors[finalIndex];
};

const Explore: React.FC<Props> = ({navigation}) => {
  useDidMount(() => {
    console.log('@@@@@@@@@@@exlore');
  });
  const screenId = useUniqueId();

  const [isActive, setIsActive] = useState(false);
  const toggle = () => {
    setIsActive(old => !old);
  };
  return (
    <View style={styles.container}>
      {isActive ? (
        void 0
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.darkV2,
            textAlign: 'center',
            marginTop: 8,
            marginBottom: 22,
          }}>
          {'Find Products'}
        </Text>
      )}
      <TextInput
        onFocus={toggle}
        onBlur={toggle}
        placeholder="Search Store"
        style={{
          backgroundColor: colors.greyV4,
          marginHorizontal: 27,
          borderRadius: 14,
          height: 50,
          paddingVertical: 0,
          paddingHorizontal: 18,
          marginTop: 8,
          marginBottom: 13,
        }}
      />
      <FlatList
        contentContainerStyle={{paddingVertical: 15, paddingHorizontal: 20}}
        data={[...exploreData, ...exploreData]}
        numColumns={2}
        renderItem={({item, index}) => {
          const {label, logo} = item;
          return (
            <View
              style={{width: '50%', padding: 7}}
              key={`${screenId}-${index}`}>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  navigation.push('exploreItems', item);
                }}
                style={{
                  flex: 1,
                  backgroundColor: `${getIndexWiseColor(index)}22`,
                  borderColor: getIndexWiseColor(index),
                  borderWidth: 1,
                  borderRadius: 18,
                  paddingHorizontal: 30,
                  paddingVertical: 18,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image source={logo} style={{marginBottom: 40}} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: colors.darkV2,
                    textAlign: 'center',
                  }}>
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {color: colors.dark},
});
