import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import BreedPicker from './app/components/BreedPicker';
import Grid from './app/components/Grid';
import { styles } from './app/assets/styles';

const GridRow = 3;

function App() {
  const [ breedList, setBreedList ] = useState([]);
  const [ breedSelected, setBreedSelected ] = useState(null);
  const [ dogList, setDogList ] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 'success') {
        setBreedList(res.message);
      }
    });
  }, []);

  useEffect(() => {
    setDogList([]);
    fetch(`https://dog.ceo/api/breed/${breedSelected}/images`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.status == 'success') {
        setDogList(res.message);
      }
    });
  }, [breedSelected]);

  return (
    <View style={styles.container}>
      <StatusBar style={'auto'}/>
      <View style={styles.header}>
        <BreedPicker
          breedList={breedList}
          selectedValue={breedSelected}
          onValueChange={(value) => setBreedSelected(value)}
        />
      </View>
      <View style={styles.content}>
        <ScrollView style={styles.contentScrollView}>
          <Grid
            dogList={dogList}
            row={GridRow}
          />
        </ScrollView>
      </View>
    </View>
  );
}

export default App;