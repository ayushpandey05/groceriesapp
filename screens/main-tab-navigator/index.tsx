import React from 'react';
import {
  ShopSVG,
  ExploreSVG,
  CartSVG,
  FavouriteSVG,
  AccountSVG,
} from '../../assets/svgs';
import createTabNavigator from '../../components/tab-navigator';
import {colors} from '../../theme/colors';
import Account from '../account';
import Cart from '../cart';
import Explore from '../explore';
import Favourite from '../favourite';
import Shop from '../shop';

const MainTabNavigator = createTabNavigator(
  {
    shop: {
      screen: Shop,
      tab: {
        title: 'Shop',
        icon: ShopSVG,
      },
    },
    explore: {
      screen: Explore,
      tab: {
        title: 'Explore',
        icon: ExploreSVG,
      },
    },
    cart: {
      screen: Cart,
      tab: {
        title: 'Cart',
        icon: CartSVG,
      },
    },
    favourite: {
      screen: Favourite,
      tab: {
        title: 'Favourite',
        icon: FavouriteSVG,
      },
    },
    account: {
      screen: Account,
      tab: {
        title: 'Account',
        icon: AccountSVG,
      },
    },
  },
  'account',
);

export default MainTabNavigator;
