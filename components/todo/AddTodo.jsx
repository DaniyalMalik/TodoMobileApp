import {View, Text, TextInput, StyleSheet, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function AddTodo() {
  const [todo, setTodo] = useState({title: '', description: '', done: false});
  const {title, description, done} = todo;

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.body}>Add Todo</Text>
        <TextInput
          //   onChangeText={onChangeText}
          value={title}
        />
        <TextInput
          //   onChangeText={onChangeText}
          value={description}
        />
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          // onValueChange={toggleSwitch}
          value={done}
        />
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
