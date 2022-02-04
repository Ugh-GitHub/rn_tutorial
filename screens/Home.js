import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import PalettePreview from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

// To pass data from the other component need the route parameter (duh)
const Home = ({ navigation, route }) => {
  // If route.params exists, newPalette sets to route.params.newPalette, otherwisw null
  const newPalette = route.params ? route.params.newPalette : null;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);
  useEffect(() => {
    handleFetchPalettes();
  }, []);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  });

  // Takes the existing palettes and adds a new one if newPalette. Not set to handle a lot of bugs
  useEffect(() => {
    if (newPalette) {
      setPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddNewPalette')}
      >
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>
      <FlatList
        style={styles.list}
        data={palettes}
        keyExtractor={(item) => item.paletteName}
        renderItem={({ item }) => (
          <PalettePreview
            onPress={() => navigation.push('ColorPalette', item)}
            palette={item}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});

export default Home;
