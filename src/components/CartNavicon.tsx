import {Pressable, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../resources/colors';
import {hp} from '../resources/config';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParams} from '../types/navigation';
import {useNavigation} from '@react-navigation/native';
import {SCREEN_NAME} from '../navigation/constant';
import {useAppSelector} from '../store';
import {FontSize} from '../resources/fonts';

const CartNavicon = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();
  const {cart} = useAppSelector(state => state.cart);

  const goToCart = () => {
    navigation.navigate(SCREEN_NAME.cart);
  };

  return (
    <>
      {!!cart?.length && (
        <View
          style={{
            position: 'absolute',
            zIndex: 10,
            alignItems: 'center',
            justifyContent: 'center',
            top: -1,
            right: 2,
            height: hp(15),
            aspectRatio: 1,
            borderRadius: hp(15 * 0.5),
            backgroundColor: colors.traaple_accent,
          }}>
          <Text
            style={{
              color: colors.traaple_light,
              fontSize: FontSize.SmallText2,
            }}>
            {cart?.length}
          </Text>
        </View>
      )}
      <Pressable
        onPress={goToCart}
        style={{
          height: hp(50),
          aspectRatio: 1,
          backgroundColor: colors.traaple_dark,
          borderRadius: hp(50 * 0.5),
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: colors.traaple_black,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,

          elevation: 6,
        }}>
        <AntDesign
          name="shoppingcart"
          color={colors.traaple_light}
          size={hp(24)}
        />
      </Pressable>
    </>
  );
};

export default CartNavicon;
