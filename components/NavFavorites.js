import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed"
import tw from "twrnc"

const data = [
  {
    id:"123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id:"456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavorites = () => {
  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style = {tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
        <View>
          <Text>{location}</Text>
          <Text>{destination}</Text>
        </View>
        </TouchableOpacity>
      )}/> 
  )
}

export default NavFavorites

const styles = StyleSheet.create({})