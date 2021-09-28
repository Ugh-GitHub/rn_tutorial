// App.js

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'My home' }}
        />
        <Stack.Screen
          name="ColorPalette"
          component={ColorPalette}
          options={({ route }) => ({ title: route.params.paletteName })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

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

// const COLORS = [
//   { colorName: 'Base03', hexCode: '#002b36' },
//   { colorName: 'Base02', hexCode: '#073642' },
//   { colorName: 'Base01', hexCode: '#586e75' },
//   { colorName: 'Base00', hexCode: '#657b83' },
//   { colorName: 'Base0', hexCode: '#839496' },
//   { colorName: 'Base1', hexCode: '#93a1a1' },
//   { colorName: 'Base2', hexCode: '#eee8d5' },
//   { colorName: 'Base3', hexCode: '#fdf6e3' },
//   { colorName: 'Yellow', hexCode: '#b58900' },
//   { colorName: 'Orange', hexCode: '#cb4b16' },
//   { colorName: 'Red', hexCode: '#dc322f' },
//   { colorName: 'Magenta', hexCode: '#d33682' },
//   { colorName: 'Violet', hexCode: '#6c71c4' },
//   { colorName: 'Blue', hexCode: '#268bd2' },
//   { colorName: 'Cyan', hexCode: '#2aa198' },
//   { colorName: 'Green', hexCode: '#859900' },
// ];
