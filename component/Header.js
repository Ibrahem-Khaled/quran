import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={true} />
      <TouchableOpacity onPress={() => { navigation.goBack(); }}>
        <Ionicons name="arrow-back-circle" size={36} color="#300759" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around"

  },
  title: {
    color: "#300759",
    fontSize: 25,
    fontWeight: "bold"
  },
  image: {
    height: "100%",
    width: "30%",
    alignSelf: "flex-start"

  }
});