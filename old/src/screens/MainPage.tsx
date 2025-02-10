import React, { useState, useEffect } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { NavigationProps } from "../types/types";
import commonStyle, { darkTheme } from "../utils/Style";
import CustomMap from "../components/CustomMap";
import FooterComponent from "../components/FooterComponent";

const MainPage: React.FC<NavigationProps<"MainPage">> = ({ navigation }) => {

  const [selectedFloor, getSelectedFloor] = useState(1);

  const getButtonStyle = (floor: number) => {
    return floor === selectedFloor
      ? commonStyle.selectedButton
      : commonStyle.unselectedButton;
  }
  
  return (
    <ScrollView style={{backgroundColor: darkTheme.backgroundBlack}}> 
      <View style={commonStyle.container}>
        <Text style={commonStyle.header}>GymHawk</Text>
        <View style={commonStyle.row}>
          <TouchableOpacity style={getButtonStyle(1)} onPress={() => getSelectedFloor(1)}>
            <Text style={commonStyle.text}>Floor 1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={getButtonStyle(2)} onPress={() => getSelectedFloor(2)}>
            <Text style={commonStyle.text}>Floor 2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={getButtonStyle(3)} onPress={() => getSelectedFloor(3)}>
            <Text style={commonStyle.text}>Floor 3</Text>
          </TouchableOpacity>
        </View>
        <CustomMap floor={selectedFloor}/>
        <FooterComponent />
      </View>
    </ScrollView>
  );
};


export default MainPage;
