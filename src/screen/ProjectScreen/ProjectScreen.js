import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatePresence, MotiView } from 'moti'
import { ColorHeaderBackground } from '../../components/ColorHeaderBackground'
import { Colors } from '../../utils/Colors'

export const ProjectScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(true)

  useEffect(() => {
    if (!isFocus) {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 100)
    }
  }, [isFocus])

  return (
    <View style={s.container}>
      <AnimatePresence>
        {isFocus && (
          <MotiView style={s.container}>
            <ColorHeaderBackground colors={Colors.gradientProjectScreen} />
            <TouchableOpacity onPress={() => setIsFocus(false)} style={{
              position: 'absolute',
              bottom: 100,
              right: 100
            }}>
              <Text>Project Screen</Text>
            </TouchableOpacity>
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
