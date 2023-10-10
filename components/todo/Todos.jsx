import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Todo from './Todo';
import Icon from 'react-native-vector-icons/AntDesign';

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
    <View style={styles.container}>
      <Text style={styles.heading}>Todo List</Text>
      <View style={styles.addButtonView}>
        <Icon.Button
          name="plussquareo"
          backgroundColor="black"
          onPress={() => navigation.navigate('AddTodo')}
          style={styles.addButton}>
          Add
        </Icon.Button>
      </View>
      <FlatList
        data={todos}
        renderItem={({item}) => <Todo todo={item} />}
        keyExtractor={item => item._id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  addButtonView: {
    alignItems: 'flex-end',
    margin: 5,
  },
});
