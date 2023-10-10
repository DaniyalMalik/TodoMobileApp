import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Todos from './components/todo/Todos';
import ViewTodo from './components/todo/ViewTodo';
import AddTodo from './components/todo/AddTodo';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Todo" component={Todos} />
        <Stack.Screen name="ViewTodo" component={ViewTodo} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        {/* <Stack.Screen name="EditTodo" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
