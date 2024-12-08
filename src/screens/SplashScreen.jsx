// src/screens/SplashScreen.js
import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      // Ganti 'Home' dengan nama screen tujuan Anda
      navigation.replace('Home')
    }, 3000) // Splash screen akan muncul selama 3 detik
  }, [])

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/final-splashscreen.png')} // Sesuaikan path dengan lokasi asset Anda
        style={styles.logo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94B7D7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
    fontStyle: 'italic',
  },
})

export default SplashScreen
