import {StyleSheet} from 'react-native';
import {hp, wp} from '../resources/config';
import {colors} from '../resources/colors';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(15),
    backgroundColor:colors.traaple_light

  },

  titleText: {
    color: colors.traaple_light,
    marginLeft: wp(15),
    marginVertical: hp(25),
    fontWeight: '600',
    fontSize: hp(24),
  },
  IconWrapper: {
    backgroundColor: '#161728',
    height: hp(50),
    width: hp(50),
    borderRadius: 50,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#2A2B3A',
  },
  iconStyles: {},
  smallFont: {},
  nornmalFont: {},
  bigFont: {
    fontSize: hp(24),
  },
  extrabigFont: {},
});
