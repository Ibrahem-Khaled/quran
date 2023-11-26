import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Header from '../component/Header'
import Sebha from '../src/sebha';
const Azkar = ({ item }) => {
  const [count, setCount] = useState(0);
  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => setCount(count + 1)}
        style={styles.Btn}>
        <Text style={{ fontSize: 23, fontWeight: "bold", marginBottom: 12 }}>{item.name}</Text>
        <Text style={{ fontSize: 12, fontWeight: "bold" }}>{item.disc}</Text>
        <Text style={{ fontWeight: "bold" }}>{item.count - count}</Text>
      </TouchableOpacity>);
  }
  return (
    <SafeAreaView style={styles.mainView}>
      <Header title={"الاذكار"} />
      <FlatList
        data={Sebha}
        keyExtractor={(item) => item.id}
        renderItem={Item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#DAD0E1",
    alignItems: "center",
  },
  Btn: {
    width: "98%",
    height: 140,
    backgroundColor: "#E5B6F2",
    alignItems: "center",
    alignSelf: "center",
    margin: 3,
    borderRadius: 10,
    justifyContent: "center",
  },
});
export default Azkar;