import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View, Pressable } from 'react-native'
import { Colors } from '../../../utils/Colors'
import { MotiView } from 'moti'
import { duration } from '../../../utils/Duration'

const BUTTON_HEIGHT = 60

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
        {motiViewSpring(s.mainButton, () => (<Text style={s.mainText}>test</Text>))}
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
    backgroundColor: Colors.accent,
    height: BUTTON_HEIGHT
  },
  mainText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800'
  },
  secondaryButton: {
    width: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    backgroundColor: Colors.gray,
    borderRadius: 18,
    marginLeft: 16,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
