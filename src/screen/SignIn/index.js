import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {height, normalize, normalizeHorizontal, colors} from '../../helper';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import CheckBox from '@react-native-community/checkbox';
import {IMG_BACKGROUND, ICON_PREVIOUS} from '../../asset';

export const SignIn = () => {
  const navigation = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <ImageBackground style={styles.backround} source={IMG_BACKGROUND}>
        <View style={styles.content}>
          <FastImage style={styles.previous} source={ICON_PREVIOUS} />
          <Text style={styles.txtContainer}>{'Draftar'}</Text>
          <Text style={styles.txtContent}>
            {'Simpan resep lezat dan dapatkan konten pribadimu'}
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.tipName}
            placeholder="Name"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.tipEmail}
            placeholder="Email"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.tipPassword}
            placeholder="Password"
            placeholderTextColor="#fff"
          />
          <TextInput
            style={styles.tipConfirmPassword}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
          />
          <View style={styles.checkbox}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              tintColor="#fff"
              onTintColor="green"
              onCheckColor="green"
              style={styles.check}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.txtCheckbox}>
              {
                'Saya ingin menerimainspirasi resep, mencari makan, pembaruan, dan banyak lagi'
              }
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.btnSignIN}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.txtSignIn}>{'Sign In'}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  content: {
    marginHorizontal: normalizeHorizontal(40),
    marginTop: normalize(60),
  },
  txtContainer: {
    color: colors.TEXT,
    fontSize: normalize(24),
    fontWeight: '500',
    marginVertical: normalize(20),
  },
  txtContent: {
    fontSize: normalize(20),
    color: colors.TEXT,
    fontWeight: '300',
  },
  backround: {
    height: height,
    width: '100%',
  },
  previous: {
    height: normalize(20),
    aspectRatio: 1,
  },
  form: {
    marginTop: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: normalizeHorizontal(20),
  },
  tipName: {
    width: '90%',
    backgroundColor: '#000',
    height: normalize(50),
    paddingLeft: normalizeHorizontal(10),
    borderRadius: normalize(12),
    color: colors.TEXT,
    opacity: 0.5,
    shadowOffset: {
      width: normalizeHorizontal(-4),
      height: normalize(-10),
    },
    shadowColor: '#fad97d',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 1,
  },
  tipEmail: {
    width: '90%',
    backgroundColor: '#000',
    height: normalize(50),
    marginTop: normalize(20),
    paddingLeft: normalizeHorizontal(10),
    borderRadius: normalize(12),
    color: colors.TEXT,
    opacity: 0.5,
    shadowOffset: {
      width: normalizeHorizontal(-4),
      height: normalize(-10),
    },
    shadowColor: '#fad97d',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 1,
  },
  tipPassword: {
    width: '90%',
    backgroundColor: '#000',
    height: normalize(50),
    marginTop: normalize(20),
    paddingLeft: normalizeHorizontal(10),
    borderRadius: normalize(12),
    color: colors.TEXT,
    opacity: 0.5,
    shadowOffset: {
      width: normalizeHorizontal(-4),
      height: normalize(-10),
    },
    shadowColor: '#fad97d',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 1,
  },
  tipConfirmPassword: {
    width: '90%',
    backgroundColor: '#000',
    height: normalize(50),
    marginTop: normalize(20),
    paddingLeft: normalizeHorizontal(10),
    borderRadius: normalize(12),
    color: colors.TEXT,
    opacity: 0.5,
    shadowOffset: {
      width: normalizeHorizontal(-4),
      height: normalize(-10),
    },
    shadowColor: '#fad97d',
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 1,
  },
  checkbox: {
    flexDirection: 'row',
    marginTop: normalize(40),
    marginHorizontal: normalizeHorizontal(20),
    alignItems: 'center',
  },
  txtCheckbox: {
    color: colors.TEXT,
    marginLeft: normalizeHorizontal(12),
    fontWeight: '400',
  },
  btnSignIN: {
    backgroundColor: '#FE8E00',
    height: normalize(50),
    width: '90%',
    alignSelf: 'center',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: normalizeHorizontal(-4),
      height: normalize(-10),
    },
    shadowColor: '#fad97d',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 1,
    position: 'absolute',
    bottom: normalize(40)
  },
  txtSignIn: {
    color: colors.TEXT,
    fontSize: normalize(20),
    fontWeight: '500',
  },
});
