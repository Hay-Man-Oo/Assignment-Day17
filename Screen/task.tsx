import React, {
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [selectedColor, setSelectedColor] = useState(null);
  
  const clickHandler = (index: any) => {
    setSelectedColor(index);
  };
  console.log("selected is ", selectedColor);
  const data = [
    {
      id: "1",
      name: "Yellow",
    },
    {
      id: "2",
      name: "Green",
    },
    {
      id: "3",
      name: "Blue",
    },
    {
      id: "4",
      name: "Purple",
    },
    {
      id: "5",
      name: "Red",
    },
    {
      id: "6",
      name: "Orange",
    },
  ];


  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
              {data.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => {
                      clickHandler(index);
                    }}
                    style={styles.container}
                  >
                  <Text
                    style={index === selectedColor ? styles.selected : styles.notSelected}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
  );
}
const styles = StyleSheet.create({
  container: {
    fles: 1,
    backgroundColor: "#fff",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  selected: {
    color: "blue",
  },
  notSelected: {
    color: "red",
  },
});