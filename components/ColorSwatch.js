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
    marginVertical: 5,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});

export default ColorSwatch;
