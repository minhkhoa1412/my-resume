import React from 'react'
import { View, Text, Dimensions, StyleSheet } from "react-native"
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const WINDOW = Dimensions.get('window')
const PADDING_HORIZONTAL = 20

export const Content = () => {
  const inset = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingBottom: inset.bottom }}>
      <View style={styles.content}>
        <Text style={styles.text}>
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with other cursor position commands, though those felt clunky and non-robust.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 30,
    paddingHorizontal: PADDING_HORIZONTAL,
  },
  text: {
    fontSize: Math.min(WINDOW.width * 0.053, 20),
    color: '#989898'
  }
})
