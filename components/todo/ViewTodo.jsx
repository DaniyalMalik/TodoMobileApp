import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import axios from 'axios';

export default function ViewTodo({route}) {
  const [todo, setTodo] = useState({});

  async function request() {
    const res = await axios.get(
      'http://192.168.69.235:5000/api/todos/' + route.params.id,
    );

    setTodo(res.data.data.todo);
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Title: </Text>
          {todo?.title}
        </Text>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Description: </Text>
          {todo?.description}
        </Text>
        <Text style={styles.body}>
          <Text style={styles.bodyHeading}>Done: </Text>
          {todo?.done?.toString()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 20,
    elevation: 10,
    shadowColor: '#000000',
  },
  body: {color: 'black', fontSize: 20},
  bodyHeading: {fontWeight: 'bold'},
});
