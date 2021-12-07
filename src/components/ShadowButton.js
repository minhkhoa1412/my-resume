import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { colors as systemColors } from '../utils/Colors'
import LinearGradient from 'react-native-linear-gradient'
import { fonts } from '../utils/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonType = {
  POSITIVE: 1, NEGATIVE: 0
}

export const ShadowButton = ({ colors, text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <LinearGradient
        colors={colors ?? systemColors.gradientMainScreen}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={s.button}
      >
        <Text
          style={[s.textButton]}
        >
          {text.toUpperCase()}
        </Text>
      </LinearGradient>
    </Pressable>
  )
}

const s = StyleSheet.create({
  button: {
    backgroundColor: systemColors.accent,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    marginRight: 10,
    marginBottom: 10
  },
  textButton: {
    color: 'white',
    fontSize: RFValue(12),
    fontFamily: fonts.poppinsBold
  }
})
