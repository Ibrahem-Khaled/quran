import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    PermissionsAndroid,
    ImageBackground,
    Image
} from 'react-native';
import Header from '../component/Header';
function Busla() {
    return (
        <View style={styles.container}>
            <Header title={"Busla"} />
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Image
                    source={require('../assest/compass.png')}
                    style={{ resizeMode: 'contain', width: "80%", marginBottom: "50%" }}
                />
            </View>
            <Text style={{fontWeight:"bold",fontSize:30,textAlign:"center",marginBottom:50}}>اتجاه القبلة</Text>
        </View >
    )
}
const styles = StyleSheet.create({

    container: { backgroundColor: '#DAD0E1', flex: 1 },
});

export default Busla;