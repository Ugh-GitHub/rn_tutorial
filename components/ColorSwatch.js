import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorSwatch = (props) => {
  const colorStyle = {
    backgroundColor: props.hexCode,
  };

  return <View style={[styles.square, colorStyle]} />;
};

const styles = StyleSheet.create({
  square: {
    width: 20,
    height: 20,
  },
});

export default ColorSwatch;
