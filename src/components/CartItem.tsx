import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {cartT} from '../types/product.type';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../resources/colors';
import {hp} from '../resources/config';
import {FontSize} from '../resources/fonts';
import { useAppDispatch } from '../store';
import { decreaseItem, increaseItem, removeItem } from '../store/cart-store';

const CartItem = ({name, id, price, image,qty=0}: cartT) => {

    const dispatch = useAppDispatch()


  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        // backgroundColor: colors.traaple_light_50,
        marginVertical: hp(10),
        alignItems: 'center',
      }}>
      <Image
        style={{height: hp(80), aspectRatio: 1, borderRadius: 10}}
        source={{uri: image}}
      />

      <View style={{marginLeft: hp(20)}}>
        <Text style={{fontSize: FontSize.MediumText2, fontWeight: '500'}}>
          {name}
        </Text>
        <Text style={{fontSize: FontSize.MediumText, paddingVertical: hp(4)}}>
          ${price}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: hp(120),
            gap: 10,
            marginTop: hp(5),
          }}>
          <TouchableOpacity style={styles.btnWrapper} onPress={()=>dispatch(decreaseItem({id}))}>
            <AntDesign name="minus" color={colors.traaple_dark} size={13} />
          </TouchableOpacity>
          <Text>{qty}</Text>
          <TouchableOpacity style={styles.btnWrapper} onPress={()=>dispatch(increaseItem({id}))}>  
            <AntDesign name="plus" color={colors.traaple_dark} size={13} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
      onPress={()=>dispatch(removeItem({id}))}
        style={{
          position: 'absolute',
          height: hp(35),
          borderRadius: hp(35*0.5),
          aspectRatio: 1,
          justifyContent: 'center',
          alignItems: 'center',
          right: 15,
          top: 5,
          backgroundColor: colors.traaple_light,
        }}>
        <AntDesign name="close" color={colors.traaple_dark} size={18} />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  btnWrapper: {
    height: hp(25),
    borderRadius: hp(25 * 0.5),
    aspectRatio: 1,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.traaple_light_gray,
  },
});
