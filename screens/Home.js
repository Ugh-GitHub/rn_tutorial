import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ColorSwatch from '../components/ColorSwatch';

const COLOR_PALETTES = [
  {
    name: 'Solarized',
    array: [
      { colorName: 'Base03', hexCode: '#002b36' },
      { colorName: 'Base02', hexCode: '#073642' },
      { colorName: 'Base01', hexCode: '#586e75' },
      { colorName: 'Base00', hexCode: '#657b83' },
      { colorName: 'Base0', hexCode: '#839496' },
      { colorName: 'Base1', hexCode: '#93a1a1' },
      { colorName: 'Base2', hexCode: '#eee8d5' },
      { colorName: 'Base3', hexCode: '#fdf6e3' },
      { colorName: 'Yellow', hexCode: '#b58900' },
      { colorName: 'Orange', hexCode: '#cb4b16' },
      { colorName: 'Red', hexCode: '#dc322f' },
      { colorName: 'Magenta', hexCode: '#d33682' },
      { colorName: 'Violet', hexCode: '#6c71c4' },
      { colorName: 'Blue', hexCode: '#268bd2' },
      { colorName: 'Cyan', hexCode: '#2aa198' },
      { colorName: 'Green', hexCode: '#859900' },
    ],
  },
  {
    name: 'Rainbow',
    array: [
      { colorName: 'Red', hexCode: '#FF0000' },
      { colorName: 'Orange', hexCode: '#FF7F00' },
      { colorName: 'Yellow', hexCode: '#FFFF00' },
      { colorName: 'Green', hexCode: '#00FF00' },
      { colorName: 'Violet', hexCode: '#8B00FF' },
    ],
  },
  {
    name: 'Frontend Masters',
    array: [
      { colorName: 'Red', hexCode: '#c02d28' },
      { colorName: 'Black', hexCode: '#3e3e3e' },
      { colorName: 'Grey', hexCode: '#8a8a8a' },
      { colorName: 'White', hexCode: '#ffffff' },
      { colorName: 'Orange', hexCode: '#e66225' },
    ],
  },
];

const Home = ({ navigation }) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.push('ColorPalette', {
              paletteName: item.name,
              colors: item.array,
            })
          }
        >
          <Text>{item.name}</Text>
          <View style={styles.swatch}>
            <ColorSwatch hexCode={item.array[0].hexCode} />
            <ColorSwatch hexCode={item.array[1].hexCode} />
            <ColorSwatch hexCode={item.array[2].hexCode} />
            <ColorSwatch hexCode={item.array[3].hexCode} />
            <ColorSwatch hexCode={item.array[4].hexCode} />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  swatch: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});

export default Home;
