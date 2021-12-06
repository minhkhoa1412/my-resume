import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { MotiView } from 'moti'
import { Colors } from '../utils/Colors'

const { height } = Dimensions.get('window')
export const HEADER_HEIGHT = height * 0.27

export const ColorHeaderBackground = ({ color }) => {
  return (
    <MotiView
      key="backgroundView"
      style={[s.backgroundView, { backgroundColor: color ?? Colors.accent }]}
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
    backgroundColor: Colors.accent
  }
})
