import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('MobileForm');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image 
        source={require('/home/tushar/Desktop/sample/newprj/comPonents/Assets/SplashScreen.png')}
        style={styles.image} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E66EC',
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
