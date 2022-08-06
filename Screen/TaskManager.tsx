import React, {useState ,useEffect} from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Pressable } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { Button } from 'native-base';

export default function TaskManager({ navigation}: any) {

  const [taskcolor, setTaskColor] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [taskname, setTaskName] = useState('');
  const [tasktitle, setTaskTitle] = useState('');

  useEffect(() => {
    getData();
  },[]);

  const getData = () => {
    try {
      AsyncStorage.getItem('Task Color')
      .then(value => {
        if (value != null) {
          setTaskColor(value);
        }
      })
  }
  catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.setItem('Task Deadline' , selectedDate.toLocaleDateString() || selectedTime.toLocaleTimeString() );
  }
  catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.getItem('Task Name')
      .then(value => {
        if (value != null) {
          setTaskName(value);
        }
      })
  }
  catch (e) {
      console.log(e);
    }
    try {
      AsyncStorage.getItem('Task Title')
      .then(value => {
        if (value != null) {
          setTaskTitle(value);
        }
      })
  }
  catch (e) {
      console.log(e);
    }
  }

  return (

    <View style={{flex:1}}>
      <View style={{flex:0.9}}>
        <Text
          style={{ paddingTop: 40, paddingLeft: 20, paddingBottom: 10, fontSize: 20 }}
        >
          Welcome Back
        </Text>
        <Text
          style={{ paddingLeft: 20, paddingBottom: 10, fontSize: 30,fontWeight:'bold' }}
        >
          Here's Update Today.
        </Text>
        <View
          style={{
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            marginLeft: 20,
            backgroundColor: 'skyblue',
            marginTop:10
          }}
        >
          <View style={{
            flexDirection: 'row',
            paddingLeft: 20,
            marginTop: 10
          }}>
            <Text
              style={{
                fontSize: 20,
                borderWidth: 1,
                borderRadius: 20,
                width: '30%',
                textAlign: 'center',
                paddingTop: 5,
                paddingBottom: 5,
                fontWeight: '900',
                marginRight: 170 
              }}>
              {tasktitle}
            </Text>
            <FontAwesome5 name='edit' color={'#000'} size={25} />
          </View>
          <Text style={{ fontSize: 30, paddingLeft: 20, fontWeight: 'bold', paddingTop: 20, paddingBottom: 10 }}>
            {taskname}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10,paddingLeft:20 }}>{taskcolor }</Text>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <FontAwesome5 name='calendar' color={'#444'} size={20} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10,paddingLeft:20 }}>
            {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'}
            </Text>
          </View>
          <View style={{flexDirection:'row',paddingLeft:20}}>
            <FontAwesome5 name='clock' color={'#444'} size={20} />
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20,paddingLeft:20,marginRight: 150 }}>
            {selectedTime ? selectedTime.toLocaleTimeString() : 'No Time selected'}
            </Text>
            <FontAwesome5 name='circle' color={'#000'} size={25} />
          </View>
          
        </View>
      </View>

      <View style={{flex:0.1,alignItems:'center',justifyContent:'center'}}>
        <Pressable onPress={() => navigation.navigate('Add Task')}
        style={{width:300,alignItems:'center',justifyContent:'center'}}>
          <View style={{flexDirection:'row',borderWidth:1,borderRadius:25,padding:10,backgroundColor:'black'}}>
            <FontAwesome5 name='plus-square' color={'#fff'} size={20} />
            <Text
              style={{ fontSize: 20,color:'#fff',paddingLeft:5,paddingTop:1 }}
            >
              Add Task
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

