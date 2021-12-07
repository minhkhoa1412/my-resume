import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SkillItem } from './SkillItem'
import { MotiText, MotiView } from 'moti'
import { RFValue } from 'react-native-responsive-fontsize'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import { Easing } from 'react-native-reanimated'

export const SkillBlock = ({ title, skills }) => {
  return (
   <View>
     <MotiText
       style={s.textTitle}
       from={{ opacity: 0, translateY: 100 }}
       exit={{ opacity: 0, translateY: 100 }}
       animate={{ opacity: 1, translateY: 0 }}
       transition={{ type: 'timing', easing: Easing.bezier(0.25, 0.1, 0.25, 1) }}
       exitTransition={{ type: 'timing', duration: 200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }}
     >
       {title}
     </MotiText>

     <MotiView
       style={s.container}
       from={{ opacity: 0, translateX: 60 }}
       exit={{ opacity: 0, translateX: 60 }}
       animate={{ opacity: 1, translateX: 0 }}
       transition={{ type: 'timing', easing: Easing.bezier(0.25, 0.1, 0.25, 1)}}
     >
       {skills.map((item) => {
         return (
           <SkillItem key={item.id} text={item.text} />
         )
       })}
     </MotiView>
   </View>
  )
}

const s = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  textTitle: {
    fontSize: RFValue(20),
    color: colors.black,
    marginBottom: 16,
    fontFamily: fonts.poppinsBold
  },
})
