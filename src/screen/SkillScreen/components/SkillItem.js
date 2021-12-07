import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { fonts } from '../../../utils/Fonts'

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
      width: 2,
      height: 6
    },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    marginRight: 14,
    marginBottom: 14
  },
  text: {
    fontSize: RFValue(12),
    fontFamily: fonts.poppinsRegular,
    color: colors.black
  }
})
