import {Image, View} from 'react-native';
import {hp} from '../resources/config';
import { CategoryImage} from '../types/product.type';

const CustomImage = ({name, size = hp(45)}: {name: string; size?: number}) => {
  switch (name) {
    case CategoryImage.All:
      return (
        <Image
          style={{height: size, width: size}}
          source={require('../assets/images/burger_2.png')}
        />
      );
    case CategoryImage.SEA_FOOD:
      return (
        <Image
          style={{height: size, width: size}}
          source={require('../assets/images/SeaFood.png')}
        />
      );
    case CategoryImage.FAST_FOOD:
      return (
        <Image
          style={{height: size, width: size}}
          source={require('../assets/images/burger.png')}
        />
      );
    case CategoryImage.DRINKS:
      return (
        <Image
          style={{height: size, width: size}}
          source={require('../assets/images/drinks.png')}
        />
      );
    case CategoryImage.DESSERTS:
      return (
        <Image
          style={{height: size, width:size}}
          source={require('../assets/images/pizza_1.png')}
        />
      );
    case CategoryImage.VEGETARIAN:
      return (
        <Image
          style={{height: size, width:size}}
          source={require('../assets/images/fruit.png')}
        />
      );

    default:
      break
  }
};

export default CustomImage;
