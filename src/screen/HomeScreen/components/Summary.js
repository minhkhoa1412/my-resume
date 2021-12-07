import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { myCV } from '../../../data/cv'
import { MotiText } from 'moti'
import { duration } from '../../../utils/Duration'
import { fonts } from '../../../utils/Fonts'
import { colors } from '../../../utils/Colors'
import { RFValue } from 'react-native-responsive-fontsize'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const Summary = () => {
  const inset = useSafeAreaInsets()

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={s.container}
      contentContainerStyle={{ paddingBottom: inset.bottom + 90 }}
    >
      <MotiText
        style={s.textTitle}
        from={{ opacity: 0, translateY: 100 }}
        exit={{ opacity: 0, translateY: 100 }}
        animate={{ opacity: 1, translateY: 0 }}
        delay={duration.DELAY_SUMMARY_TEXT}
        transition={{
          type: 'timing',
          duration: 700
        }}
        exitTransition={{
          type: 'timing',
          duration: 200
        }}
      >
        Summary
      </MotiText>
      {myCV.summary.map((item, index) => (
        <MotiText
          key={item.id}
          from={{ opacity: 0, translateY: 150 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 150 }}
          delay={duration.DELAY_SUMMARY_TEXT}
          exitTransition={{
            type: 'timing',
            delay: 100 + (100 / (index + 1))
          }}
          transition={{
            type: 'timing',
            duration: 400 + ((index + 1) * 300)
          }}
          style={s.textSummary}
        >
          {item.text}
        </MotiText>
      ))}
    </ScrollView>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1
  },
  textTitle: {
    fontSize: RFValue(36),
    color: colors.black,
    marginBottom: 20,
    fontFamily: fonts.poppinsBold
  },
  textSummary: {
    fontSize: RFValue(16),
    color: colors.textContent,
    marginBottom: 10,
    fontFamily: fonts.poppinsRegular
  }
})
