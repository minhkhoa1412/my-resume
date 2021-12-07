import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../utils/Colors'
import { images } from '../utils/Images'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { motify } from 'moti'

const MotiTouchableOpacity = motify(TouchableOpacity)()

export const BackButton = ({ onPress }) => {
  const insetAreas = useSafeAreaInsets()

  return (
    <MotiTouchableOpacity
      from={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={onPress}
      style={[s.container, { top: insetAreas.top + 30 }]}
    >
      <Image style={s.iconBack} source={images.iconBack} resizeMode="contain"/>
    </MotiTouchableOpacity>
  )
}

const s = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 30,
    zIndex: 1,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
  },
  iconBack: {
    width: 20,
    height: 20,
    tintColor: colors.black
  }
})
