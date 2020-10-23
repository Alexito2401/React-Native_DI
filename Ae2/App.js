/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  ActivityIndicator,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Avatar } from 'react-native-elements';
import { Input } from 'react-native-elements';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />



      <Header
        leftComponent={{ icon: 'home', color: '#fff' }}
        centerComponent={{ text: 'Exercici de Alex B.', style: { color: '#fff' } }}
      />


      <Image
        source={{ uri: 'https://www.wallpaperup.com/uploads/wallpapers/2013/08/19/135949/00297a2528269ffcd01955cb6acb0a12.jpg' }}
        style={{ width: '100%', height: '30%' }}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Avatar
        rounded
        source={{
          uri:
            'https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg',
        }}
      />

      <Input
        placeholder='Login'
        leftIcon={{ type: 'font-awesome', name: 'user' }}
      />

      <Input placeholder="Password" secureTextEntry={true}
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />

      <Button style={{
        
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.12,
        shadowRadius: 60,

      }}
        title="Entrar"
        type="outline"
      />

      <ScrollView>
        <Card>
          <Card.Title>2º DAM</Card.Title>
          <Card.Divider />
          <Image
            source={{ uri: 'https://blogs.florida.es/floridauniversitariablog/wp-content/uploads/sites/19/2018/10/FLORIDA-UNIVERSITARIA.png' }}
            style={{ width: 350, height: 150 }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Text style={{ marginBottom: 10 }}>
            Cicle Formatiu de Desenvolupament D'Aplicacions Multiplataforma
  </Text>
        </Card>
      </ScrollView>


    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  Sombras: {
    shadowRadius: 10
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  scrollView: {
    backgroundColor: 'lightgrey',
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
  },
});

export default App;
