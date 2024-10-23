import React from 'react';
import { Image } from 'react-native';
import styles from '../styles';

const Logo = () => {
  return <Image 
  source={require('../../../assets/images/logo.png')} 
  style={{
    resizeMode: 'contain',
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 20
  }}
  />;
};

export default Logo;
