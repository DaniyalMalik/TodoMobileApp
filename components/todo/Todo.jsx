import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function Todos({todo: {_id, title, description, done}}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Title: </Text>
          {title}
        </Text>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Description: </Text>
          {description}
        </Text>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Done: </Text>
          {done.toString()}
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Icon name="delete" color="firebrick" size={25} />
        <Icon name="edit" color="dodgerblue" size={25} />
        <Icon
          name="eyeo"
          color="dodgerblue"
          size={25}
          onPress={() => navigation.navigate('ViewTodo', {id: _id})}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 5,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
    shadowColor: '#000000',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {color: 'black'},
  bodyHeading: {fontWeight: 'bold'},
});
