


import React from 'react';
import { View, TextInput, StyleSheet,Text } from 'react-native';
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';

// SearchBar component
const Searchbar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons
        name="search"
        size={20}
        color="gray"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchBar}
        placeholder="Search conditions, doctors..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
    marginBottom: 16,
  },
  searchBar: {
    height: 40,
    flex: 1,
    paddingLeft: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
});

export default Searchbar;