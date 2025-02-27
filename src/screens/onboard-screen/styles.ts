import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {hp, SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../resources/config';
import {colors} from '../../resources/colors';
import {ImageStyle} from 'react-native';
import { FontSize } from '../../resources/fonts';

interface Styles {
  container: ViewStyle;
  wrapper: ViewStyle;
  welcomeImage: ImageStyle;
  welcomeText: TextStyle;
}
const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: colors.traaple_dark,
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    alignContent: 'center',
    justifyContent:'center'
  },
  welcomeImage: {
    height: hp(200),
    aspectRatio: 1,
  },
  welcomeText: {
    color: colors.traaple_light,
    fontSize:FontSize.BigText2,
    fontStyle:'italic',
    fontWeight:'500',
    textAlign:'center'
  },
});
export default styles;
