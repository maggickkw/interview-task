import {SCREEN_NAME} from '../navigation/constant';

//root stack navigations
export type rootStackParams = {
  [SCREEN_NAME.onboarding]: undefined;
  [SCREEN_NAME.main]: undefined;
  [SCREEN_NAME.product]: {productId:number};
  [SCREEN_NAME.cart]: undefined;

  
};



//drawer screen type
export type BottomMenuParams = {
  [SCREEN_NAME.home]: undefined;
  [SCREEN_NAME.message]: undefined;
  [SCREEN_NAME.message]: undefined;
  [SCREEN_NAME.addtocart]: undefined;
  [SCREEN_NAME.notification]: undefined;
  [SCREEN_NAME.profile]: undefined;
};