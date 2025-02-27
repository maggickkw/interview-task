import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC} from 'react';
import {colors} from '../resources/colors';
import {FontSize} from '../resources/fonts';
import {hp, SCREEN_WIDTH} from '../resources/config';

type BtnProps = TouchableOpacityProps & {
  title: string;
  titleStyle?: TextStyle;
  containerStyle?:ViewStyle
};

const Btn: FC<BtnProps> = ({title, titleStyle,containerStyle, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.container,containerStyle]} {...rest}>
      <Text style={[styles.btnText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Btn;

const styles = StyleSheet.create({
  container: {
    height: hp(45),
    width: hp(250),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:hp(20),
    backgroundColor: colors.traaple_light,
  },
  btnText: {
    color: colors.traaple_dark,
    fontSize: FontSize.MediumText,
    fontWeight:'600'
  },
});
