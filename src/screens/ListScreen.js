import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';
import faker from 'faker';

const ListScreen = () => {


  const friends = [
    { name: 'Friend: #1', age: faker.datatype.number(50) },
    { name: 'Friend: #2', age: faker.datatype.number(50) },
    { name: 'Friend: #3', age: faker.datatype.number(50) },
    { name: 'Friend: #6', age: faker.datatype.number(50) },
    { name: 'Friend: #7', age: faker.datatype.number(50) },
    { name: 'Friend: #8', age: faker.datatype.number(50) },
    { name: 'Friend: #9', age: faker.datatype.number(50) },

  ];

  return (
    <View>
      <FlatList
        keyExtractor={(friend) => friend.name }
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
            </Text>
          )
        }}
      />
    </View>

  );

}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  },
  // subHeaderStyle: {
  //   fontSize: 20
  // }
});

export default ListScreen;


/**
 * Notes

 <FlatList
        horizontal // scroll list horizontal vs up and down
        showsHorizontalScrollIndicator={false} // removes scroll bar to the user
        keyExtractor={(friend) => friend.name } // only rule with rn key === unique, string
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
            {item.name} - Age {item.name}
            </Text>
          )
          console.log(element) ; element === {iten : {name : 'Friend #1'}, index: 0}
 **/
