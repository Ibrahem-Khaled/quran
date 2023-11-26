import * as react from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';



export default function Startpage() {
  const navigation = useNavigation();
  const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-7743830953013097/4493168722';

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "#300759" }}>تطبيق القران</Text>
      <Text style={{ fontSize: 18, fontWeight: "600", color: "#9D1DF2", bottom: 20, width: "50%", textAlign: "center" }}>تعلم القرآن كل يوم واقرأه مرة واحدة كل يوم</Text>
      <TouchableOpacity onPress={() => { navigation.navigate("Home") }}
        style={styles.btn}>
        <Image
          style={styles.Image}
          source={require("../photos/mosquee.png")} />
        <Text style={{
          fontSize: 25, fontWeight: "bold", color: "#fff",
          textAlign: "center", backgroundColor: "#9D1DF2",
          padding: 15, borderRadius: 40, width: 150, top: 20
        }}>فلنبدأ</Text>
      </TouchableOpacity>

      <View>
        <BannerAd
          unitId={adUnitId}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DAD0E1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Image: {
    height: 250,
    alignSelf: "center",
    width: 250,
    top: 50,
  },
  btn: {
    width: "95%",
    height: "50%",
    backgroundColor: "#300759",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
