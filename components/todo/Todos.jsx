import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Todo from './Todo';

export default function Todos() {
  const [todos, setTodos] = useState([]);

  async function request() {
    const res = await axios.get('http://192.168.69.235:5000/api/todos');

    setTodos(res.data.data.todos);
  }

  useEffect(() => {
    request();
  }, []);

  return (
    <View>
      <Text style={styles.heading}>Todo List</Text>
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo todo={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
});
