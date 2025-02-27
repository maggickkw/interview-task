import {Platform} from 'react-native';
import { fs } from './config';


export type FONT_WEIGHT =
  | 'Black'
  | 'Bold'
  | 'ExtraBold'
  | 'ExtraLight'
  | 'Light'
  | 'Medium'
  | 'Regular'
  | 'SemiBold'
  | 'Thin';


const FontsFamily = {
//   TEXT_REGULAR:
//     Platform.OS === 'ios' ? 'Averta Demo PE Cutted Demo' : 'Averta-Regular',
//   TEXT_BOLD: 'Averta-Bold',
//   TEXT_SEMI_BOLD:
//     Platform.OS === 'ios' ? 'AvertaW01-Semibold' : 'Averta-Semibold',
};

export const FontSize = {
  HeadingText: fs(30),
  subHeadingText: fs(24),
  BigText: fs(20),
  BigText2: fs(18),
  MediumText: fs(16),
  MediumText2: fs(14),
  SmallText: fs(12),
  SmallText2: fs(10),
};