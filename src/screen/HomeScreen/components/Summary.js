import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { myCV } from '../../../data/cv'
import { MotiText } from 'moti'
import { duration } from '../../../utils/Duration'

export const Summary = () => {
  return (
    <ScrollView style={s.container}>
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
          duration: 700
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
            delay: 400 + (300 / (index + 1))
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
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    marginBottom: 20
  },
  textSummary: {
    fontSize: 20,
    color: 'black',
    marginBottom: 10
  }
})
