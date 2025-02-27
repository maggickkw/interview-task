import React, {FC} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../resources/colors';
import {hp, SCREEN_WIDTH} from '../resources/config';
import {FontSize} from '../resources/fonts';
import {cartT, popularT} from '../types/product.type';
import Btn from './Btn';
import { useAppDispatch } from '../store';
import { addToCart } from '../store/cart-store';

type PopularItemProps = popularT & {};

const PopularItem: FC<PopularItemProps> = ({
  id,
  name,
  image,
  price,
  rating,
}) => {
  

  const dispatch = useAppDispatch();

  const addTocart = () => {
    dispatch(addToCart({id, name, image, price} as cartT));
  };


  return (
    <ImageBackground
      source={{uri: image}}
      imageStyle={{borderRadius: 20}}
      style={{
        height: hp(300),
        width: hp(SCREEN_WIDTH * 0.75),
        marginHorizontal: hp(8),
        borderRadius: hp(80),
        padding: hp(10),
      }}>
      <View style={{height: '100%'}}>
        <Text
          style={{
            fontSize: FontSize.BigText,
            fontWeight: '600',
            color: colors.traaple_light,
            paddingTop:hp(10),
            width:hp(140)
          }}>
          {name}
        </Text>

        <View style={{position: 'absolute', bottom: 10, width: '100%'}}>
          <Text
            style={{
              color: colors.traaple_light,
              fontSize: FontSize.BigText,
              fontWeight: '600',
              marginBottom:hp(10)
            }}>
            ${price}
          </Text>
          <View style={{flexDirection: 'row',marginBottom:hp(7)}}>
            <AntDesign name="star" size={18} color={'#F4D458'} />
            <Text style={{color:colors.traaple_light,fontSize:FontSize.SmallText}}>{rating}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Btn title="Add to Cart" containerStyle={{width: '60%'}} onPress={addTocart} />

            <TouchableOpacity style={styles.btnwrapper}>
              <AntDesign
                name="message1"
                color={colors.traaple_light}
                size={20}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnwrapper}>
              <AntDesign name="hearto" color={colors.traaple_light} size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default PopularItem;

const styles = StyleSheet.create({
  btnwrapper: {
    height: hp(40),
    aspectRatio: 1,
    borderRadius: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
});
