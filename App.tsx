import React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import TaskManager from './Screen/TaskManager';
import AddTask from './Screen/AddTask';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Task Manager"
        component={TaskManager}
        options={{
          
          headerTitle: 'Task Manager',
          headerTitleAlign: 'center',
            headerTintColor: '#444',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
    }}/>
      <Stack.Screen
        name="Add Task"
        component={AddTask}
        options={{
          
          headerTitle: 'Add Task',
          headerTitleAlign: 'center',
            headerTintColor: '#444',
            headerTitleStyle: {
              fontWeight: 'bold',
          },
          headerStyle: {
              backgroundColor: '#ffffff',
            }
    }}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
