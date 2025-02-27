import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useMemo} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../../resources/colors';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {hp} from '../../resources/config';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParams} from '../../types/navigation';
import CartItem from '../../components/CartItem';
import {useAppDispatch, useAppSelector} from '../../store';
import {cartT} from '../../types/product.type';
import {FontSize} from '../../resources/fonts';
import Btn from '../../components/Btn';
import {clearCart} from '../../store/cart-store';

const VAT = 7.5;
const DELIVERY_FEE = 10;

const Cart = () => {
  const {top} = useSafeAreaInsets();
  const {cart} = useAppSelector(state => state.cart);

  const SUB_TOTAL = useMemo(() => {
    const sub = cart?.reduce((accu, current) => {
      return current.price * current.qty + accu;
    }, 0);

    return sub;
  }, [cart]);

  const Vat = useMemo(() => {
    return (SUB_TOTAL * VAT) / 100;
  }, [cart]);



  const Delivery = useMemo(() => {
    return (SUB_TOTAL * DELIVERY_FEE) / 100;
  }, [cart]);



  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const handleClearCart = () => {
    Alert.alert(
      'Clear Cart',
      'are you sure you want to remove all items in your cart ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Proceed',
          onPress: () => {
            dispatch(clearCart());
          },
        },
      ],
    );
  };

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
            size={hp(24)}
          />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Cart</Text>

        <TouchableOpacity
          style={styles.headerItemWrapper}
          onPress={handleClearCart}>
          <EvilIcons name="trash" color={colors.traaple_black} size={hp(24)} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          marginHorizontal: hp(15),
          marginVertical: hp(20),
          maxHeight: hp(450),
        }}>
        <FlatList
          data={cart ?? []}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item: cartT, indx) => `${item?.name}-${indx}`}
          renderItem={({item}) => <CartItem {...item} />}
        />
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerRow}>
          <Text style={styles.leftText}>Sub total</Text>
          <Text style={styles.rightText}>${Math.round(SUB_TOTAL)}</Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.leftText}>
            Vat-<Text style={{fontSize: FontSize.SmallText2}}>{VAT}%</Text>
          </Text>
          <Text style={styles.rightText}>${Math.round(Vat)}</Text>
        </View>
        <View style={styles.footerRow}>
          <Text style={styles.leftText}>Delivery Fee</Text>
          <Text style={styles.rightText}>${Math.round(Delivery)}</Text>
        </View>
        <View
          style={[
            styles.footerRow,
            {
              borderTopWidth: 1,
              borderTopColor: colors.traaple_gray,
              paddingTop: hp(10),
            },
          ]}>
          <Text
            style={[
              styles.leftText,
              {fontSize: FontSize.MediumText, fontWeight: '600'},
            ]}>
            Total
          </Text>
          <Text
            style={[
              styles.rightText,
              {
                fontSize: FontSize.MediumText,
                color: colors.traaple_black,
                fontWeight: '600',
              },
            ]}>
            ${Math.round(SUB_TOTAL+Vat+Delivery)}
          </Text>
        </View>

        <Btn
        disabled={cart?.length===0}
          title="Checkout"
          containerStyle={{
            width: '90%',
            backgroundColor: colors.traaple_black,
            alignSelf: 'center',
            marginTop: hp(15),
            opacity:!!cart?.length ? 1:0.5
          }}
          titleStyle={{color: colors.traaple_light}}
        />
      </View>
    </View>
  );
};

export default Cart;
