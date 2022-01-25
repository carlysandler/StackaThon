import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ShowResultsScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id') // Hook

  const getResult = async id => {
    const res = await yelp.get(`/${id}`);
    setResult(res.data)
  }
  useEffect(() => {
    getResult(id)
  }, []);


  if (!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.data}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ShowResultsScreen;
