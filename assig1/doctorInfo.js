import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';

const Doctorinfo = ({ name, specialty, rating }) => {
  return (
    <View style={styles.doctorinformation}>
      <MaterialCommunityIcons name="doctor" size={50} color="purple" />
      <Text style={styles.docname}>{name}</Text>
      <Text style={styles.specialty}>{specialty}</Text>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingBox}>
          <AntDesign name="star" size={16} color="yellow" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  doctorinformation: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 8,
    alignItems: 'center',
    width: '45%',
  },
  docname: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  specialty: {
    fontSize: 13,
    color: '#555',
    marginBottom: 7,
    textAlign: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#000',
  },
  ratingText: {
    fontSize: 13,
    marginLeft: 5,
    color: 'purple',
  },
});

export default Doctorinfo;
