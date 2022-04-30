import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [altitude, setAltitude] = useState(null);
  const [speed, setSpeed] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar o local negada!');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
      setAltitude(location.coords.altitude);
      setSpeed(location.coords.speed);
    })();

    let text = 'Aguardando...';
    if (errorMsg) {
      text = errorMsg
    } else if (location) {
      text = JSON.stringify(location)
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.box}> Latitude: {latitude} </Text>
      <Text style={styles.box}> Longitude: {longitude} </Text>
      <Text style={styles.box}> Altitude: {altitude} </Text>
      <Text style={styles.box}> Velocidade: {speed} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginTop: 50
  }
});
