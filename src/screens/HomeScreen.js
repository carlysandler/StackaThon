import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.text}>Hi There!</Text>
    <Button
      onPress={() => navigation.navigate('Components')}
      title="Go to Components Demo"
      />
    <Button
      onPress={() => navigation.navigate('List')}
      title="Go to List Demo"
      />
    <Button
      onPress={() => navigation.navigate('Image')}
      title="Go to Image Demo"
      />
    <Button
      onPress={() => navigation.navigate('Counter')}
      title="Go to Counter Demo"
      />
    <Button
      onPress={() => navigation.navigate('Color')}
      title="Go to Color Demo"
      />
    <Button
      onPress={() => navigation.navigate('Square')}
      title="Go to Square Demo"
      />
    <Button
      onPress={() => navigation.navigate('Text')}
      title="Go to Text Demo"
      />
    <Button
      onPress={() => navigation.navigate('Box')}
      title="Go to Box Demo"
      />
    <Button
      onPress={() => navigation.navigate('Search')}
      title="Go to Search Bar Demo"
      />
    <Button
      onPress={() => navigation.navigate('TextSentiment')}
      title="Go to Sentiment Analysis Demo"
    />
    {/* <TouchableOpacity onPress={() => navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  }
});

export default HomeScreen;
