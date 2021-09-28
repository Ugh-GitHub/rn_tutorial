// App.js

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';

const COLORS = [
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
];

const App = () => {
  return (
    <SafeAreaView>
      {/* // Here's an example of how to use styles without a stylesheet
    // <View style={{ backgroundColor: 'teal' }} />
    // First set of brackets tells JSX passing an object, and the second is the actual object */}

      {/* To add multiple styles to an element, can pass an array of StyleSheet objects like:
    <View style={[styles.firstStyle, styles.secondStyle]} />
      OR
    <View style={[styles.firstStyle, { backgroundColor: 'teal' }]} />
      */}
      <View>
        <Text style={styles.header}>Here is a list of colors</Text>
      </View>

      <FlatList
        data={COLORS}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
        )}
      />
      {/* <ColorBox hexCode="#2aa198" colorName="Cyan" />
      <ColorBox hexCode="#268bd2" colorName="Blue" />
      <ColorBox hexCode="#d33682" colorName="Magenta" />
      <ColorBox hexCode="#cb4b16" colorName="Orange" /> */}
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2aa198',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    alignItems: 'center',
    color: 'white',
    borderRadius: 5,
    // justifyContent: 'space-around',
    // flex: 1,
    // justifyContent: 'center',
  },
  header: {
    // backgroundColor: '#2aa198',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 0,
    alignItems: 'flex-start',
    paddingTop: 30,
    fontWeight: 'bold',
    // justifyContent: 'space-around',
    // flex: 1,
    // justifyContent: 'center',
  },
  containerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

// Cyan: #2aa198
// Blue: #268bd2
// Magenta: #d33682
// Orange: #cb4b16

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
