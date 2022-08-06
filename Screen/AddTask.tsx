import React, { useState, useEffect } from 'react';
import { Text,TouchableOpacity, Alert ,View, TextInput,Pressable,SafeAreaView ,StyleSheet} from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import RNPickerSelect from "react-native-picker-select";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddTask({ navigation }: any) {
  
  const [taskcolor, setTaskColor] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [taskname, setTaskName] = useState('');
  const [tasktitle, setTaskTitle] = useState('');
  
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date:any) => {
    setSelectedDate(date);
    setSelectedTime(date);
    hideDatePicker();
  };

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem('Task Color', taskcolor);
      Alert(navigation.navigate('Task Manager'));
  }
  catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem('Task Deadline' , selectedDate.toLocaleDateString() || selectedTime.toLocaleTimeString() );
  }
  catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem('Task Name', taskname);
  }
  catch (e) {
      console.log(e);
    }
    try {
      await AsyncStorage.setItem('Task Title', tasktitle);
  }
  catch (e) {
      console.log(e);
    }
  }

  return (

    <SafeAreaView style={ Styles.container}>
      <View style={{flex:0.9}}>
      <View style={Styles.colorView}>
          <Text style={Styles.text}>Task Color</Text>
          {/*<View style={{flexDirection:'row',paddingTop:10,paddingBottom: 10}}>
            <TouchableOpacity
              onPress={(taskcolor)=>setTaskColor('Yellow')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'yellow', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setTaskColor('Green')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'green', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setTaskColor('Blue')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'blue', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setTaskColor('Purple')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'purple', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setTaskColor('Red')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'red', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>setTaskColor('Orange')}
              style={{ padding: 15, marginRight: 10, backgroundColor: 'orange', borderWidth: 1, borderRadius: 20 }}>
            </TouchableOpacity>
          </View>*/}
          
        <RNPickerSelect onValueChange={(taskcolor) => setTaskColor(taskcolor)}
          items={[
            { label: "Yellow", value: "Yellow" },
            { label: "Green", value: "Green" },
            { label: "Blue", value: "Blue" },
            { label: "Purple", value: "Purple" },
            { label: "Red", value: "Red" },
            { label: "Orange", value: "Orange" },
          ]}
        />
      </View>
      <View>
        <Text style={{fontSize: 20,paddingLeft:20,paddingTop:20}}>Task Deadline</Text>
        <View style={Styles.deadlineView}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
                {selectedDate ? selectedDate.toLocaleDateString() : 'No date selected'} , {selectedTime ? selectedTime.toLocaleTimeString() : 'No Time selected'}
          </Text>
          <Pressable onPress={showDatePicker} style={{paddingLeft:140}}>
            <View>
            <FontAwesome5 name='calendar' color={'#444'} size={20} />
            </View>
        </Pressable>
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
        </View>
      </View>
      <View style={Styles.taskName}>
        <Text style={Styles.text}>Task Title</Text>
        <TextInput style={{paddingTop:10,paddingBottom:10,fontSize:20}}
            placeholder=" "
            onChangeText={text => setTaskName(text)}
            value={taskname}
          />
      </View>
      <View style={Styles.taskName}>
        <Text style={Styles.text}>Task Title</Text>
        <RNPickerSelect onValueChange={(tasktitle) => setTaskTitle(tasktitle)}
          items={[
            { label: "Basic", value: "Basic" },
            { label: "Urgent", value: "Urgent" },
            { label: "Important", value: "Important" },
          ]}
        />
      </View>
      </View>
      <View style={{flex:0.1,alignItems:'center',justifyContent:'center'}}>
        <Pressable
          onPress={(handleSubmit)}
          style={{alignItems:'center',justifyContent:'center'}}>
          <View style={{flexDirection:'row',borderWidth:1,borderRadius:25,padding:10,backgroundColor:'black'}}>
            <Text
              style={{ fontSize: 20,color:'#fff',paddingLeft:60,paddingRight:60,paddingTop:1 }}
            >
              Save Task
            </Text>
          </View>
        </Pressable>
      </View>
      </SafeAreaView>
  );
}


const Styles = StyleSheet.create({
  //container1: {
  //  fles: 1,
  //  //flexDirection: 'row',
  //  backgroundColor: "#fff",
  //  width: '12%',
  //  borderWidth: 1,
  //  borderRadius: 30,
  //  paddingTop: 10,
  //  paddingBottom: 10,
  //  marginRight: 10,
  //  //alignItems: "center",
  //  //justifyContent: "center",
  //},
  //selected: {
  //  backgroundColor: "blue",
  //},
  //notSelected: {
  //  backgroundColor: "red",
  //},
  container: {
    flex: 1,
  },
  colorView: {
    width: '90%',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  text: {
    fontSize: 20,
  },
  deadlineView: {
    width: '90%',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  taskName: {
    width: '90%',
    paddingTop: 10,
    borderBottomWidth: 1,
    marginLeft: 20,
  },
})