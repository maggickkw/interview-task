import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {hp, SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../resources/config';
import {colors} from '../../resources/colors';
import {ImageStyle} from 'react-native';
import {FontSize} from '../../resources/fonts';

interface Styles {
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerItemWrapper: ViewStyle;
  headerText: TextStyle;
  footerContainer: ViewStyle;
  footerRow: ViewStyle;
  leftText: TextStyle;
  rightText: TextStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',
    // paddingHorizontal:hp(15)
  },

  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItemWrapper: {
    height: hp(40),
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: '#d4d4d4',
    borderRadius: hp(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: FontSize.BigText,
    fontWeight: '600',
  },

  footerContainer: {
    width: '100%',
    paddingHorizontal: hp(15),
    position:'absolute',
    bottom:hp(40)
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical:hp(5),
  
  },

  rightText: {
    fontSize: FontSize.MediumText2,
    fontWeight: '400',
    color: colors.traaple_gray,
  },
  leftText: {
    fontSize: FontSize.MediumText2,
    fontWeight: '500',
  },
});
export default styles;
