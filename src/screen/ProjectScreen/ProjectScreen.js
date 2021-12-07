import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatePresence, MotiView } from 'moti'
import { ColorHeaderBackground } from '../../components/ColorHeaderBackground'
import { colors } from '../../utils/Colors'
import { BackButton } from '../../components/BackButton'

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
            <ColorHeaderBackground title='Projects' colors={colors.gradientProjectScreen} />
            <BackButton onPress={() => setIsFocus(false)} />
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
