import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SCREEN_NAME} from '../constant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/home-screen';
import BlankScreen from '../../components/BlankScreen';
import {BottomMenuParams} from '../../types/navigation';
import {hp, SCREEN_WIDTH} from '../../resources/config';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../resources/colors';
import TabItemContainer from '../../components/TabItemContainer';
import CartNavicon from '../../components/CartNavicon';

const {Navigator, Screen} = createBottomTabNavigator<BottomMenuParams>();

const MainTab = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarItemStyle: styles.tabItem,
        tabBarHideOnKeyboard:true
      
      }}>
      <Screen
        name={SCREEN_NAME.home}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <TabItemContainer focused={focused} color={color} size={size} name='Home'>
                <MaterialIcons
                  name="home"
                  color={focused ? colors.traaple_light : colors.traaple_dark}
                  size={size}
                />
              </TabItemContainer>
            );
          },
        }}
      />
      <Screen
        name={SCREEN_NAME.message}
        component={BlankScreen}
        options={{
          title: 'Message',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <TabItemContainer focused={focused} color={color} size={size} name='Message'>
                <Ionicons
                  name="chatbox-ellipses-outline"
                  color={focused ? colors.traaple_light : colors.traaple_dark}
                  size={size}
                />
              </TabItemContainer>
            );
          },
        }}
      />
      <Screen
        name={SCREEN_NAME.addtocart}
        component={EmptyScreen}
        listeners={() => ({
          tabPress: e => {
            e.preventDefault();
          },
        })}
        options={{
         
          tabBarIcon: ({}) => {
            return (
              <CartNavicon/>
            )
          }
        }}
      />
      <Screen
        name={SCREEN_NAME.notification}
        component={BlankScreen}
        options={{
          title: 'Notification',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <TabItemContainer focused={focused} color={color} size={size} name='Notification'>
                <Ionicons
                  name="notifications-outline"
                  color={focused ? colors.traaple_light : colors.traaple_dark}
                  size={size}
                />
              </TabItemContainer>
            );
          },
        }}
      />
      <Screen
        name={SCREEN_NAME.profile}
        component={BlankScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, focused, size}) => {
            return (
              <TabItemContainer focused={focused} color={color} size={size} name='Profile'>
                <AntDesign
                  name="user"
                  color={focused ? colors.traaple_light : colors.traaple_dark}
                  size={size}
                />
              </TabItemContainer>
            );
          },
        }}
      />
    </Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '90%',
    marginLeft: SCREEN_WIDTH * 0.05,
    bottom: hp(30),
    // backgroundColor: 'red',
    backgroundColor: '#f6f6f6',
    height: hp(70),
    borderRadius: hp(40),
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabItem: {
    marginTop: hp(15),
  },
});


const EmptyScreen = ()=>{
  return null
}