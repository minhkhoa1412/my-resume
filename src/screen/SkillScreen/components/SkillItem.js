import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { fonts } from '../../../utils/Fonts'
import { MotiView } from 'moti'
import { Easing } from 'react-native-reanimated'

export const SkillItem = ({ text }) => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{text}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 20,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    marginRight: 14,
    marginBottom: 14
  },
  text: {
    fontSize: RFValue(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.black
  }
})
