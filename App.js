// App.js

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

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
      <View style={styles.header}>
        <Text style={{ fontWeight: 'bold' }}>
          Here are some boxes of different colors
        </Text>
      </View>
      <ColorBox hexCode="#2aa198" colorName="Cyan" />
      <ColorBox hexCode="#268bd2" colorName="Blue" />
      <ColorBox hexCode="#d33682" colorName="Magenta" />
      <ColorBox hexCode="#cb4b16" colorName="Orange" />
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
