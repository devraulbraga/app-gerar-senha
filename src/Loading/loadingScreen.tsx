// src/LoadingScreen.js
import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import CarSvg from '../password.svg'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <CarSvg/>
      <ActivityIndicator size="large" color="#5B05E2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});

export default LoadingScreen;
