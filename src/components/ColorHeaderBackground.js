import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { MotiView, motify } from 'moti'
import { Colors } from '../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'

const { height } = Dimensions.get('window')
export const HEADER_HEIGHT = height * 0.27
const MotiLinearGradient = motify(LinearGradient)()

export const ColorHeaderBackground = ({ colors }) => {
  return (
    <MotiLinearGradient
      colors={colors ?? Colors.gradientMainScreen}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      key="backgroundView"
      style={[s.backgroundView]}
      from={{ height: 0 }}
      exit={{ height: 0 }}
      animate={{ height: HEADER_HEIGHT }}
      transition={{ delay: 200 }}
      exitTransition={{ type: 'timing' }}
    />
  )
}

const s = StyleSheet.create({
  backgroundView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomRightRadius: 100,
  }
})
