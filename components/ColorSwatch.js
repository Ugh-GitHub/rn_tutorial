import React from 'react';
import { View, StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';

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
    marginVertical: 5,
    marginHorizontal: 5,
  },
});

export default ColorSwatch;
