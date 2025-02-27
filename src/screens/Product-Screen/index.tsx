import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useCallback} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import styles from './styles';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {rootStackParams} from '../../types/navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../resources/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {hp} from '../../resources/config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useGetCategory, useGetProduct} from '../../services/queries';
import {cartT, categoryT, productT} from '../../types/product.type';
import CustomImage from '../../components/CustomImage';
import {FontSize} from '../../resources/fonts';
import Btn from '../../components/Btn';
import {useAppDispatch} from '../../store';
import {addToCart} from '../../store/cart-store';

const Product = () => {
  const {top} = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {params} = useRoute<RouteProp<{params: {productId: number}}>>();
  const productId = params?.productId;
  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();

  const {
    data: productData,
    isError: isProductError,
    isLoading: isLoadingProduct,
  } = useGetProduct({productId});

  const product: productT = productData?.data;

  //   console.log('product data', JSON.stringify(productData?.data, null, 3));

  const {
    data: categoryData,
    isError: isCategoryError,
    isLoading: isLoadingCategory,
  } = useGetCategory({categoryId: product?.category_id});

  // console.log('category data', JSON.stringify(categoryData?.data, null, 3));

  const catogory: categoryT = categoryData?.data;

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const addTocart = useCallback(() => {
    dispatch(
      addToCart({
        id: product?.id,
        name: product?.name,
        image: product?.image,
        price: product?.price,
      } as cartT),
    );
  }, [product]);

  return (
    <View
      style={[
        globalStyles.container,
        styles.container,
        {paddingTop: top + 20},
      ]}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerItemWrapper} onPress={handleBack}>
          <AntDesign
            name="arrowleft"
            color={colors.traaple_black}
            size={hp(22)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.headerItemWrapper}
          //   onPress={handleClearCart}
        >
          <AntDesign name="hearto" color={colors.traaple_black} size={hp(20)} />
        </TouchableOpacity>
      </View>
      <View style={styles.productWrapper}>
        <View style={{marginTop: hp(10)}}>
          <Text style={styles.headerText}>{product?.name}</Text>
          <View style={styles.catreviewWrapper}>
            <View style={styles.catreviewItem}>
              <CustomImage name={catogory?.name} size={hp(18)} />
              <Text style={styles.categoryText}>{catogory?.name}</Text>
            </View>

            <View style={styles.catreviewItem}>
              <AntDesign name="star" size={18} color={'#F4D458'} />
              <Text style={styles.categoryText}>
                {product?.rating}
                <Text
                  style={{
                    fontSize: FontSize.SmallText2,
                    color: colors.traaple_gray,
                  }}>
                  ({product?.reviews} reviews)
                </Text>{' '}
              </Text>
            </View>
          </View>
          <View style={{marginVertical: hp(15)}}>
            <Image
              source={{uri: product?.image}}
              style={{height: hp(270), borderRadius: hp(15)}}
            />
          </View>

          <View>
            <Text style={styles.detailsTitle}>Details</Text>

            <View>
              <Text style={styles.descripTionText}>{product?.description}</Text>
              <Text style={[styles.descripTionText, {marginTop: hp(10)}]}>
                Ingredients:{' '}
                {product?.ingredients?.map((ingr, ind) => (
                  <Text key={`ind-${ind}`} style={{color: colors.traaple_gray}}>
                    {ingr} ,
                  </Text>
                ))}
              </Text>
            </View>

            <View style={styles.extIngcontainer}>
              {product?.extraIngredients?.map((exIn, ind) => (
                <View style={styles.extIngItem}>
                  <Text>{exIn?.name}</Text>
                  <Text>${exIn?.price}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
      <Btn
      onPress={addTocart}
        title="Add to Cart"
        containerStyle={{
          width: '90%',
          position: 'absolute',
          bottom: 40,
          backgroundColor: colors.traaple_black,
          alignSelf: 'center',
          marginTop: hp(15),
        }}
        titleStyle={{color: colors.traaple_light}}
      />
    </View>
  );
};

export default Product;
