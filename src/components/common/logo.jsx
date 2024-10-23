import React from 'react';
import { Image } from 'react-native';
import styles from '../styles';

const Logo = () => {
  return <Image 
  source={require('../../../assets/images/logo.png')} 
  style={styles.imageLogo}
  />;
};

export default Logo;
