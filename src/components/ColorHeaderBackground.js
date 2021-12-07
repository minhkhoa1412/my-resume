import React from 'react'
import { Dimensions, Platform, StatusBar, StyleSheet, Text, View } from 'react-native'
import { motify } from 'moti'
import { colors, colors as systemColors } from '../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { fonts } from '../utils/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

const { height } = Dimensions.get('window')
export const HEADER_HEIGHT = height * 0.27
const MotiLinearGradient = motify(LinearGradient)()

export const ColorHeaderBackground = ({ colors, title = '' }) => {
  const insetAreas = useSafeAreaInsets()

  return (
    <MotiLinearGradient
      colors={colors ?? systemColors.gradientMainScreen}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      key="backgroundView"
      style={[s.backgroundView]}
      from={{ height: 0 }}
      exit={{ height: 0 }}
      animate={{ height: HEADER_HEIGHT }}
      transition={{ delay: 200 }}
      exitTransition={{ type: 'timing' }}
    >
      <Text
        style={[
          s.text, { marginTop: (Platform.OS === 'android' ? StatusBar.currentHeight : insetAreas.top) + 30}
        ]}>
        {title}
      </Text>
    </MotiLinearGradient>
  )
}

const s = StyleSheet.create({
  backgroundView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomRightRadius: 100,
    zIndex: 0,
    alignItems: 'flex-end'
  },
  text: {
    marginRight: 36,
    color: colors.white,
    fontFamily: fonts.poppinsSemiBold,
    fontSize: RFValue(18)
  }
})
