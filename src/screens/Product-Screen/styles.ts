import {ViewStyle, StyleSheet, TextStyle} from 'react-native';
import {hp, SCREEN_HEIGHT, SCREEN_WIDTH, wp} from '../../resources/config';
import {colors} from '../../resources/colors';
import {ImageStyle} from 'react-native';
import {FontSize} from '../../resources/fonts';

interface Styles {
  container: ViewStyle;
  headerContainer: ViewStyle;
  headerItemWrapper: ViewStyle;
  productWrapper: ViewStyle;
  headerText: TextStyle;
  catreviewWrapper: ViewStyle;
  catreviewItem: ViewStyle;
  categoryText: TextStyle;
  detailsTitle: TextStyle;
  descripTionText: TextStyle;
  extIngcontainer:ViewStyle,
extIngItem:ViewStyle
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

  productWrapper: {
    paddingHorizontal:hp(10)
  },
  headerText: {
    fontSize: FontSize.BigText,
    fontWeight: '600',
    textAlign: 'center',
  },

  catreviewWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical:hp(10)
    // backgroundColor: 'red',
  },
  catreviewItem: {
 flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    // backgroundColor:'yellow'
  },

  categoryText:{
fontSize:FontSize.SmallText
  },
  detailsTitle:{
    fontSize:FontSize.BigText2,
    fontWeight:'600'
  },
  descripTionText:{
    fontSize:FontSize.MediumText,
    fontWeight:'400',
    lineHeight:22
  },
  extIngcontainer:{
    marginTop:hp(10)
  },
extIngItem:{
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
paddingVertical:hp(6)
}
});
export default styles;
