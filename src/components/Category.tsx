import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {categoryT} from '../types/product.type';
import {hp} from '../resources/config';
import {colors} from '../resources/colors';
import {FontSize} from '../resources/fonts';
import CustomImage from './CustomImage';

type CategoryProps = categoryT & {
  selectedCategory: categoryT | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<categoryT | null>>;
};

const Category: FC<CategoryProps> = ({
  id,
  name,
  icon,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <TouchableOpacity
      onPress={() => setSelectedCategory({id, name, icon})}
      style={{marginHorizontal: hp(10), alignItems: 'center',justifyContent:'center'}}>
      <View
        style={{
          height: hp(55),
          aspectRatio: 1,
          borderRadius: hp(55 * 0.5),
          backgroundColor:
            selectedCategory?.id === id ? colors.traaple_dark : colors.traaple_light_50,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
       <CustomImage name={name}/>
      </View>
      <Text
        style={{
          fontSize: FontSize.SmallText,
          color: colors.traaple_light_gray,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;



