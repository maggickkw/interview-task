import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useRoute} from '@react-navigation/native';
import {FontSize} from '../resources/fonts';
import {colors} from '../resources/colors';

const BlankScreen = () => {
  const {name} = useRoute();
  return (
    <View
      style={[
        globalStyles.container,
        styles.centeredContainer,
      ]}>
      <Text style={{fontSize: FontSize.BigText2, color: colors.traaple_dark}}>
        {name}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BlankScreen;
