import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// DoctorCard component
const DoctorCard = ({ name, specialty, rating }) => {
  return (
    <View style={styles.card}>
      <MaterialCommunityIcons name="doctor" size={50} color="purple" />
      <Text style={styles.doctorName}>{name}</Text>
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

export default function App() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <MaterialIcons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput style={styles.searchBar}
          placeholder="Search conditions, doctors..."
        />
      </View>

      <Text style={styles.heading}>Let's find your doctor</Text>

      {/* Rendering doctors manually */}
      <View style={styles.cardContainer}>
        <DoctorCard
          name="Dr. John Smith"
          specialty="Dermatologist"
          rating={4.9}
        />
        <DoctorCard
          name="Dr. Anna Dinn"
          specialty="Psychologist"
          rating={4.9}
        />
      </View>
      <View style={styles.cardContainer}>
        <DoctorCard
          name="Dr. Angela Rayez"
          specialty="Therapist"
          rating={4.8}
        />
        <DoctorCard name="Dr. Chris Bronte" specialty="Dentist" rating={5.0} />
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    margin: 8,
    alignItems: 'center',
    width: '45%',
  },
  doctorName: {
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
