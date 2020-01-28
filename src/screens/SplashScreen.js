import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('MainScreen');
    }, 2000);
  }, [props.navigation]);
  return (
    <>
      <StatusBar hidden />
      <View style={styles.root}>
        <Icon name="whatsapp" size={120} color="#fff" />
        <Text style={styles.text}>Whaddup</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#006b3a',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 30,
  },
});

export default SplashScreen;
