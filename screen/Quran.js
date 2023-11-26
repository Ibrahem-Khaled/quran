import React from "react";
import {
  Text, View, TouchableOpacity,
  SafeAreaView, FlatList, ActivityIndicator, StyleSheet
} from 'react-native'
import Header from "../component/Header";
const Quran = ({ route, navigation }) => {
  const [loading, setLoading] = React.useState(false);
  const [quranArr, setQuranArr] = React.useState([]);
  const { identifier, name, type } = route.params;

  React.useEffect(() => {
    const getEdition = async () => {
      setLoading(true)
      const res = await fetch(`http://api.alquran.cloud/v1/quran/${identifier}`).then((response) => response.json()).then((data) => data.data.surahs);
      setQuranArr(res);
      setLoading(false)
    }
    getEdition()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={name} />
        {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={styles.spinnerTextStyle}
            style={{ alignSelf: "center", marginTop: 290 }}
            size="large"
          />
        ) : (
          <FlatList
            data={quranArr}
            keyExtractor={(item, index) => { return item.number }}
            renderItem={({ item, index }) => (
              <View key={item.num} style={styles.container1}>
                <TouchableOpacity onPress={() => { navigation.navigate("Surah", { item: item.number, name: item.name, id: identifier, check: type }) }}
                  style={{
                    flexDirection: "row", justifyContent: "space-around",
                    height: 80, borderRadius: 5, alignItems: "center", borderBottomWidth: 1,
                    borderColor: "#000"
                  }}>
                  <Text style={styles.txt}>{item.englishName}</Text>
                  <Text style={styles.txt}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )} />
        )}
      </View>
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD0E1',
  },
  container1: {
    flex: 1,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#300759"
  },
});

export default Quran;