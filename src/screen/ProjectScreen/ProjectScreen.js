import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const ProjectScreen = ({ navigation }) => {
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>ProjectScreen</Text>
      </TouchableOpacity>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
