import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {hp, SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../resources/config';
import {colors} from '../../resources/colors';
import {ImageStyle} from 'react-native';
import {FontSize} from '../../resources/fonts';

interface Styles {
  container: ViewStyle;
  searchContainer: ViewStyle;
  SearchWrapper: ViewStyle;
  itemSearchWrapper: ViewStyle;
  searchText: TextStyle;
  opTionBtn: ViewStyle;
  popularWrapper: ViewStyle;
  popularText: TextStyle;
  productWrapper: ViewStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: 'center',

    // justifyContent: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    gap: 8,
  },
  SearchWrapper: {
    flexDirection: 'row',
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: hp(40),
    borderWidth: 0.8,
    borderRadius: hp(20),
    paddingHorizontal: hp(15),
    borderColor: colors.traaple_light_gray,
  },
  itemSearchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  searchText: {
    fontSize: FontSize.SmallText2,
    color: colors.traaple_gray,
  },
  opTionBtn: {
    height: hp(40),
    aspectRatio: 1,
    borderRadius: hp(40 * 0.5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.traaple_accent,
  },

  popularWrapper: {
    marginHorizontal: hp(5),
  },
  popularText: {
    fontSize: FontSize.BigText2,
    fontWeight: '500',
    marginBottom: hp(10),
  },
  productWrapper: {
    flex:1,
    width:'100%',

  },
});
export default styles;
