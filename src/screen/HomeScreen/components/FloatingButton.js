import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../../../utils/Colors'
import { MotiView } from 'moti'
import { duration } from '../../../utils/Duration'
import { fonts } from '../../../utils/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

const BUTTON_HEIGHT = RFValue(50)
const BUTTON_WIDTH = RFValue(50)

export const FloatingButton = () => {
  const motiViewSpring = (style, children) => (
    <MotiView
      from={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: 'spring',
        duration: 700,
        delay: duration.DELAY_FLOATING_BUTTON,
        scale: { type: 'spring' }
      }}
      exitTransition={{
        type: 'spring',
        duration: 700,
        delay: duration.DELAY_FLOATING_BUTTON,
        scale: { type: 'spring' }
      }}
      style={style}
    >
      {children?.()}
    </MotiView>
  )

  return (
    <View style={s.container}>
      <Pressable
        style={{ flex: 1 }}
        onPress={() => {
          alert('test')
        }}
      >
        {motiViewSpring(s.mainButton, () => (<Text style={s.mainText}>Contact me</Text>))}
      </Pressable>
      <Pressable
        onPress={() => {
          alert('test 1')
        }}
      >
        {motiViewSpring(s.secondaryButton, () => (<Text>hi</Text>))}
      </Pressable>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
    flexDirection: 'row'
  },
  mainButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: colors.accent,
    height: BUTTON_HEIGHT
  },
  mainText: {
    color: 'white',
    fontSize: RFValue(14),
    fontFamily: fonts.poppinsBold
  },
  secondaryButton: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    backgroundColor: colors.gray,
    borderRadius: 18,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
