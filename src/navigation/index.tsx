import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Cart from '../screens/Cart-screen';
import Onboarding from '../screens/onboard-screen';
import Product from '../screens/Product-Screen';
import { rootStackParams } from '../types/navigation';
import MainTab from './bottomNav';
import { SCREEN_NAME } from './constant';

const {Navigator, Screen, Group} =
  createNativeStackNavigator<rootStackParams>();

const RootNav = () => {
  return (
    <>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen
          name={SCREEN_NAME.onboarding}
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name={SCREEN_NAME.main}
          component={MainTab}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name={SCREEN_NAME.product}
          component={Product}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name={SCREEN_NAME.cart}
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </>
  );
};

export default RootNav;
