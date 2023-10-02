import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Todos({todo: {title, description, done}}) {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 5,
    margin: 5,
  },
  body: {color: 'black'},
  bodyHeading: {fontWeight: 'bold'},
});
