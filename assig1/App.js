import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DoctorInfo from './components/doctorinfo';
import searchbar from './components/searchbar';


export default function App() {
 return (
    <View style={styles.container}>
      {/* Search Bar */}
      <searchbar />  {/* Corrected component usage (capitalize first letter) */}

      <Text style={styles.heading}>Let's find your doctor</Text>

      {/* Rendering doctors manually */}
      <View style={styles.cardContainer}>
        <DoctorInfo name="Dr. John Smith" specialty="Dermatologist" rating={4.9} />
        <DoctorInfo name="Dr. Anna Dinn" specialty="Psychologist" rating={4.9} />
      </View>
      <View style={styles.cardContainer}>
        <DoctorInfo name="Dr. Angela Rayez" specialty="Therapist" rating={4.8} />
        <DoctorInfo name="Dr. Chris Bronte" specialty="Dentist" rating={5.0} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    padding: 12,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});