// App.js

import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

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
        <Text style={{ fontWeight: 'bold' }}>Here are some boxes of different colors</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#2aa198' }]}>
        <Text style={styles.containerText}>Cyan: #2aa198</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#268bd2' }]}>
        <Text style={styles.containerText}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#d33682' }]}>
        <Text style={styles.containerText}>Magenta: #d33682</Text>
      </View>
      <View style={[styles.container, { backgroundColor: '#cb4b16' }]}>
        <Text style={styles.containerText}>Orange: #cb4b16</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#2aa198',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
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
    marginVertical: 0,
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
  }
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
