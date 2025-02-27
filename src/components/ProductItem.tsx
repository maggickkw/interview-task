import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {cartT, categoryT, productT} from '../types/product.type';
import {hp} from '../resources/config';
import {colors} from '../resources/colors';
import {FontSize} from '../resources/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useAppDispatch} from '../store';
import {addToCart} from '../store/cart-store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParams} from '../types/navigation';
import {SCREEN_NAME} from '../navigation/constant';

type ProductProps = productT & {};

const Product: FC<ProductProps> = ({id, name, image, price, rating}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();

  const dispatch = useAppDispatch();

  const addTocart = () => {
    dispatch(addToCart({id, name, image, price} as cartT));
  };

  const goToProduct = () => {
    navigation.navigate(SCREEN_NAME.product,{productId:id});
  };

  return (
    <Pressable
      onPress={goToProduct}
      style={{
        width: '50%',
        alignItems: 'center',
        borderRadius: hp(20),
        backgroundColor: '#F5F8F7',
        height: hp(250),
        margin: hp(5),
        padding: hp(15),
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          padding: hp(20),
        }}>
        <Text
          style={{
            fontSize: FontSize.MediumText2,
            textAlign: 'center',
            marginBottom: hp(5),
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: FontSize.MediumText2,
            textAlign: 'center',
            marginBottom: hp(5),
            fontWeight: '500',
          }}>
          ${price}
        </Text>
        <Image
          style={{
            height: hp(80),
            width: hp(80),
            borderRadius: hp(40),
            marginTop: hp(10),
          }}
          source={{uri: image}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: hp(10),
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            marginBottom: hp(7),
          }}>
          <AntDesign name="star" size={16} color={'#F4D458'} />
          <Text
            style={{
              color: colors.traaple_light_gray,
              fontSize: FontSize.SmallText,
            }}>
            {rating}
          </Text>
        </View>

        <TouchableOpacity
          onPress={addTocart}
          style={{
            height: hp(30),
            aspectRatio: 1,
            borderRadius: hp(15),
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.traaple_accent,
          }}>
          <AntDesign
            name="shoppingcart"
            color={colors.traaple_light}
            size={hp(18)}
          />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({});
