import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);



  return (
  <SafeAreaView style={styles.rootContainer}>
    <View style={styles.buttonContainer}>
      <Button
        style={styles.button}
        title="Increase"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        style={styles.button}
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
    </View>
    <View style={styles.outputContainer}>
      <Text style={styles.output}>Current Count: {counter}</Text>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    flex: 1,

  },
  titleContainer: {
    paddingLeft: 30,
    paddingTop: 100,
  },
  title: {
    fontSize: 30,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 200,
    height: 57,
    backgroundColor: '#f194ff',
    borderRadius: 8
  },
  buttonContainer: {
    alignItems: 'center',
    paddingBottom: 40
  },
  outputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  output: {
    fontSize: 30,
  }

});


export default CounterScreen;

