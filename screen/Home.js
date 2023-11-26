import { StatusBar } from "expo-status-bar";
import React , {useState,useEffect} from "react";
import {
  Text, View, TouchableOpacity, SafeAreaView,
  FlatList, Image, StyleSheet
} from 'react-native'
import Card from "../component/Card";
import Header from "../component/Header";
import { SliderBox } from "react-native-image-slider-box";
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-7743830953013097/2215323899';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


const Home = ({ navigation }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  const images = [
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1576764402988-7143f9cca90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    "https://images.unsplash.com/photo-1589995635011-078e0bb91d11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
    "https://images.unsplash.com/photo-1559355324-a5879d536e84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1538&q=80", // Network image
  ]

  return (
    <SafeAreaView style={{ backgroundColor: "#DAD0E1", flex: 1 }}>
      <View style={styles.mainview}>
        <Header
          title={"Quran"} />
        <SliderBox
          images={images}
          sliderBoxHeight={180}
          paginationBoxVerticalPadding={20}
          autoplay={true}
          ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
          circleLoop
          resizeMode={'cover'}
          dotColor="red"
          inactiveDotColor="black"
        />
        <View style={{ backgroundColor: "#E5B6F2", height: 200, flex: 1, marginTop: 5, borderRadius: 15, alignItems: "center", justifyContent: "space-evenly", flexDirection: "row" }}>
          <Image source={require("../assest/Vector.png")} resizeMode="contain" style={{
            height: "100%",
            width: "30%",
            alignSelf: "flex-start"
          }} />
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.mainfont}>عدد السور  : 114</Text>
            <Text style={styles.mainfont}>عدد الايات : 6,666</Text>
            <Text style={styles.mainfont}>عدد السجدات  : 14</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", }}>


          <TouchableOpacity
            style={styles.smalbtn}
            onPress={() => { navigation.navigate("busla"), interstitial.show() }}>
            <Image
              style={styles.smalimage}
              source={require("../assest/cardinal-points.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smalbtn}
            onPress={() => { navigation.navigate("Azkar"), interstitial.show() }} >
            <Image
              style={styles.smalimage}
              source={require("../assest/praying-hands.png")} />
          </TouchableOpacity>



          <TouchableOpacity
            style={{
              backgroundColor: "#300759", width: 70, height: 70,
              borderRadius: 90, alignItems: "center", alignSelf: "center", justifyContent: "center"
            }}
            onPress={() => { navigation.navigate("Quran", { identifier: "quran-uthmani", name: "Quran", type: "false" }), interstitial.show() }}>
            <Image
              style={{ width: 50, height: 50, alignSelf: "center" }}
              source={require("../assest/Group.png")} />
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.smalbtn}
            onPress={() => { navigation.navigate("Audio"), interstitial.show() }}>
            <Image
              style={styles.smalimage}
              source={require("../assest/audio-waves.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smalbtn}
            onPress={() => { navigation.navigate("Languages"), interstitial.show() }} >
            <Image
              style={styles.smalimage}
              source={require("../assest/translate.png")} />
          </TouchableOpacity>

        </View>
      </View>

    </SafeAreaView>
  );

}
export default Home;

const styles = StyleSheet.create({
  mainview: {
    height: "100%"
  },
  mainfont: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
  smalbtn: {
    backgroundColor: "#E5B6F2", width: 45, height: 45,
    borderRadius: 90, alignItems: "center", alignSelf: "center", justifyContent: "center"
  },
  smalimage: {
    width: 30, height: 30, alignSelf: "center"
  },
})