import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Constants, Accelerometer } from 'expo-sensors';

export default class App extends Component() {
  state = {
    accelerometerData: { x: 0, y: 0, z: 0 },
  }

  componentDidMount() {
    this._subscribeToAccelerometer();
  }

  componentWillMount() {
    const { width, height } = Dimensions.get('window');
    this.screenWidth = width;
    this.screenHeight = height;
    this.boxWidth = this.screenWidth / 10.0;
  }

  _subscribeToAccelerometer = () => {
    this._accelerometerSubscription = Accelerometer.addListener(
      accelerometerData => this.setState({ accelerometerData })
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: 'absolute',
            top: (-this.screenHeight * (this.state.accelerometerData.y - 1.0)) / 2.0 - this.boxWidth / 2.0,
            left: (this.screenWidth * (this.state.accelerometerData.y + 1.0)) / 2.0 - this.boxWidth / 2.0,
            width: this.screenWidth / 5.0,
            height: this.screenHeight / 5.0
          }}
        >
          <Image 
            style={{
              width: this.screenWidth / 5.0,
              height: this.screenHeight / 5.0
            }}
            source={{
              uri: 'https://www.acejundiai.com.br/wp-content/uploads/2019/03/senac-expoe-criacoes-de-estudantes-do-rs-5b88267a13728-mini.png'
            }} 
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}> Incline o telefone para mover a logo! </Text>
          <Text style={styles.paragraph}>
            x = {this.state.accelerometerData.x.toFixed(2)}
            {', '}y = {this.state.accelerometerData.y.toFixed(2)}
            {', '}z = {this.state.accelerometerData.z.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  textContainer: {
    position: 'absolute',
    top: 40,
  }
});
