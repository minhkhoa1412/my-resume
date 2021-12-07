import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { MotiView } from 'moti'

const IMAGE_HEIGHT = 170
const IMAGE_WIDTH = 120

export const Avatar = ({ uri, style }) => {
  return (
    <MotiView
      from={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'timing',
        delay: 100,
        duration: 700,
        scale: {
          type: 'spring',
          delay: 500
        }
      }}
      exitTransition={{
        type: 'timing',
        delay: 100,
        duration: 700,
        scale: {
          type: 'spring',
        }
      }}
      style={[s.container, style]}>
      <Image style={s.container} source={{ uri }}/>
    </MotiView>
  )
}

const s = StyleSheet.create({
  container: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    borderRadius: 16
  }
})
