import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {height, normalize, normalizeHorizontal} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {IMG_BACKGROUND, IMG_LOGO_LOADING_PAGE} from '../../asset';
export const LoadingPage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground style={styles.imgBackground} source={IMG_BACKGROUND}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} >
          <FastImage
            style={styles.imgLogo}
            source={IMG_LOGO_LOADING_PAGE}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgBackground: {
    height: height,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    height: normalize(250),
    aspectRatio: 1,
  },
});
