import React, { useState } from 'react';
import { FlatList, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Catogory from '../../components/Category';
import PopularItem from '../../components/PopularItem';
import Product from '../../components/ProductItem';
import { colors } from '../../resources/colors';
import { hp } from '../../resources/config';
import {
  useGetCategories,
  useGetPopularItems,
  useGetProducts,
} from '../../services/queries';
import { globalStyles } from '../../styles/globalStyles';
import { categoryT, popularT, productT } from '../../types/product.type';
import styles from './styles';

const Home = () => {
  const {top} = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState<categoryT | null>(
    null,
  );

  const {
    data: CategoryData,
    isError: isCategoryError,
    isLoading: isLoadingCategory,
  } = useGetCategories();

  const {
    data: poplarData,
    isError: isPopularError,
    isLoading: isLoadingPopular,
  } = useGetPopularItems();

  const {
    data: productData,
    isError: isProductError,
    isLoading: isLoadingProduct,
  } = useGetProducts();

  return (
    <View style={[globalStyles.container, styles.container, {paddingTop: Platform.OS === 'ios' ? top : hp(15)}]}>
      <View style={styles.searchContainer}>
        <View style={styles.SearchWrapper}>
          <View style={styles.itemSearchWrapper}>
            <AntDesign name="search1" color={colors.traaple_gray} size={18} />
            <Text style={styles.searchText}>Search</Text>
          </View>

          <View
            style={{
              width: hp(0.7),
              height: hp(20),
              backgroundColor: colors.traaple_light_gray,
            }}
          />
          <View style={styles.itemSearchWrapper}>
            <EvilIcons name="location" color={colors.traaple_gray} size={18} />
            <Text style={styles.searchText}>New York</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.opTionBtn}>
          <Ionicons name="options" color={colors.traaple_light} size={hp(18)} />
        </TouchableOpacity>
      </View>

      <View style={{height: 70,marginVertical:hp(15),alignItems:'center'}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CategoryData?.data}
          style={{alignContent:'center'}}
          keyExtractor={(item: categoryT, indx) => `${item?.name}-${indx}`}
          renderItem={({item}) => (
            <Catogory
              {...item}
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
          )}
        />
      </View>

      <View style={styles.productWrapper}>
 
        <FlatList
          ListHeaderComponent={() => (
            <View style={{height: 350, marginVertical: hp(10)}}>
              <Text style={styles.popularText}>Popular items</Text>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{height: '100%'}}>
                {poplarData?.data?.map((item: popularT, indx: number) => {
                  return (
                    <PopularItem key={`${item?.name}-${indx}`} {...item} />
                  );
                })}
              </ScrollView>
            </View>
          )}
          ListHeaderComponentStyle={{height: 380, marginVertical: hp(10)}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={productData?.data ?? []}
          style={{}}
          contentContainerStyle={{alignItems: 'center',paddingBottom:hp(120)}}
          keyExtractor={(item: productT, indx) => `${item?.name}-${indx}`}
          renderItem={({item}) => <Product {...item} />}
        />
      </View>
   
    </View>
  );
};

export default Home;
