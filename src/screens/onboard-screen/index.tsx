import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Image} from 'react-native';
import Btn from '../../components/Btn';
import {hp} from '../../resources/config';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {rootStackParams} from '../../types/navigation';
import {SCREEN_NAME} from '../../navigation/constant';

const Onboarding = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<rootStackParams>>();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.welcomeImage}
          source={require('../../assets/images/pizza_2.png')}
        />
        <Text style={styles.welcomeText}>A bite you cant resist...</Text>
      </View>

      <Btn
        title="Proceed"
        onPress={() => navigation.navigate(SCREEN_NAME.main)}
        containerStyle={{position: 'absolute', bottom: hp(70)}}
      />
    </View>
  );
};

export default Onboarding;
