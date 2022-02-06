import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {UserLogo} from '../../assets/images';
import {
  AboutSVG,
  DeliveryAddressSVG,
  EditSVG,
  ExitSVG,
  HelpSVG,
  MyDetailsSVG,
  NotificationsSVG,
  OrdersSVG,
  PaymentMethodsSVG,
  PromoCodeSVG,
  RightArrowSVG,
} from '../../assets/svgs';
import Button from '../../components/button';
import {colors} from '../../theme/colors';

interface Props {}

const name = 'Ayush Pandey';
const email = 'ayushpandey0508@gmail.com';

const data = [
  {
    label: 'Orders',
    icon: OrdersSVG,
  },
  {
    label: 'My Details',
    icon: MyDetailsSVG,
  },
  {
    label: 'Delivery Address',
    icon: DeliveryAddressSVG,
  },
  {
    label: 'Payment Methods',
    icon: PaymentMethodsSVG,
  },
  {
    label: 'Promo Code',
    icon: PromoCodeSVG,
  },
  {
    label: 'Notifications',
    icon: NotificationsSVG,
  },
  {
    label: 'Help',
    icon: HelpSVG,
  },
  {
    label: 'About',
    icon: AboutSVG,
  },
];

const Account: React.FC<Props> = () => {
  const renderHeader = () => {
    return (
      <View style={styles.userDetailContainer}>
        <Image style={styles.userLogo} source={UserLogo} />
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.userName}>{name}</Text>
            <TouchableOpacity style={{width: 15, height: 15}}>
              <EditSVG width="100%" height="100%" fill={colors.primary} />
            </TouchableOpacity>
          </View>
          <Text style={styles.userEmail}>{email}</Text>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <Button
        prefixIcon={ExitSVG}
        prefixIconProps={{
          stroke: colors.primary,
        }}
        labelStyle={{color: colors.primary}}
        style={{backgroundColor: colors.greyV4, paddingHorizontal: 24}}
        label="Log Out"
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader()}
        ListFooterComponent={renderFooter()}
        ListFooterComponentStyle={{marginVertical: 32, marginHorizontal: 25}}
        data={data}
        renderItem={({item, index}) => {
          const {label, icon: Icon} = item;
          return (
            <TouchableOpacity
              key={`account-${index}`}
              activeOpacity={0.5}
              style={styles.rowContainer}>
              <View style={{width: 20, height: 20, marginRight: 20}}>
                <Icon width="100%" height="100%" />
              </View>
              <View style={{flex: 1}}>
                <Text style={styles.rowLabel}>{label}</Text>
              </View>
              <View style={{width: 14, height: 14}}>
                <RightArrowSVG
                  width="100%"
                  height="100%"
                  fill={colors.darkV2}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {flex: 1},
  text: {color: colors.dark},
  userDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: colors.greyV2,
  },
  userLogo: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 20,
  },
  userName: {
    color: colors.darkV2,
    fontWeight: '700',
    fontSize: 20,
    marginRight: 10,
  },
  userEmail: {
    color: colors.greyV3,
    fontSize: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.greyV2,
    padding: 16,
  },
  rowLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.darkV2,
  },
});
