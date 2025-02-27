import {StyleSheet, Text, View} from 'react-native';
import React, {ReactElement, ReactNode} from 'react';
import {colors} from '../resources/colors';
import {hp} from '../resources/config';

type TabItemContainerProps = {children: ReactNode} & {
  focused: boolean;
  color: string;
  name?: string;
  size: number;
};
const TabItemContainer = ({
  children,
  focused,
  color,
  size,
  name,
}: TabItemContainerProps) => {
  return (
    <View
      style={{
        backgroundColor: focused ? colors.traaple_dark : 'transparent',
        height: hp(40),
        borderRadius: hp(40 * 0.5),
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...(name === 'Notification' ? {marginLeft: hp(15)} : {marginLeft: 0}),
        ...(name === 'Message' ? {marginRight: hp(15)} : {marginRight: 0}),
      }}>
      {children}
    </View>
  );
};

export default TabItemContainer;

const styles = StyleSheet.create({});
