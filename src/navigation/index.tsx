import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {rootStackParams} from '../types/navigation';
import {SCREEN_NAME} from './constant';
import {useAppSelector} from '../store';
import Onboarding from '../screens/onboard-screen';
import MainTab from './bottomNav';
import Cart from '../screens/Cart-screen';
import Product from '../screens/Product-Screen';

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
