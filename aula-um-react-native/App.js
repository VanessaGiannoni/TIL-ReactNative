// import * as React from 'react';
// import { 
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Image,
//   ScrollView,
//   Button
// } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <View>
//         <TextInput style={{
//           borderWidth: 1,
//           borderColor: '#666',
//           borderRadius: 5,
//           height: 40,
//           width: 300,
//           color: '#000',
//           marginTop: 60,
//           marginHorizontal: 60,
//           padding: 20,
//         }} 
//         defaultValue="Digite aqui" />
//         <Image 
//           source={{ uri: 'https://assets.b9.com.br/wp-content/uploads/2012/08/012.jpg' }}
//           style={{
//             width: 150,
//             height: 100,
//             alignSelf: 'center',
//             marginTop: 30
//           }}
//         />
//         <Button
//           title='Executar'
//           onPress={() => alert('Hello world')}
//           style={{
//             width: 150,
//             height: 60
//           }}
//         />
//       </View>
//     </ScrollView>
//   );
// }

// export default App;

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Modal,
  Pressable
} from 'react-native';

const image = { uri: "https://tnsul.com/wp-content/uploads/2019/09/Lucas-Colombo-Faculdade-Senac-Crici%C3%BAma-16.jpg" };
const DATA = [
  {
    id: '1',
    title: 'Golf GTI 1.8',
    color: 'Vermelho'
  },
  {
    id: '2',
    title: 'Lancer EVO 2.2',
    color: 'Prata'
  },
  {
    id: '3',
    title: 'Palio Attractive 1.0',
    color: 'Branco'
  },
];

const [modalVisible, setModalVisible] = useState(false)

const App = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}> {item.id} - {item.title} - {item.color} </Text>
    </View>
  );

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>CRICIUMA</Text>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fecha Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Mostra Modal</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#00c7fd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;