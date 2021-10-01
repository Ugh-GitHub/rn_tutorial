import React, { useState } from 'react';
import { SafeAreaView, Switch, View, StyleSheet, Text } from 'react-native';

const PaletteSwitch = (props) => {
  const [value, setValue] = useState(false);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>{props.colorName}</Text>
        <Switch value={value} onValueChange={setValue} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default PaletteSwitch;
