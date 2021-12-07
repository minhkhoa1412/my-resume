import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

export const RowContent = ({ text }) => {
  return (
    <View style={s.content}>
      <View style={s.dot}/>
      <Text style={s.text}>{text}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: colors.backgroundBox,
    marginRight: 10
  },
  text: {
    color: colors.white,
    fontFamily: fonts.poppinsMedium,
    fontSize: RFValue(13)
  }
})
