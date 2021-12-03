import React from "react"
import { StyleSheet, Text, Pressable } from "react-native"
import { Colors } from "../utils/Colors"

export const ButtonType = {
  POSITIVE: 1, NEGATIVE: 0
}

export const ShadowButton = ({ buttonType = ButtonType.POSITIVE, text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        s.button,
        { backgroundColor: buttonType === ButtonType.POSITIVE ? Colors.accent : Colors.gray}
      ]}
    >
      <Text
        style={[s.textButton, { color: buttonType === ButtonType.POSITIVE ? 'white' : Colors.accent }]}
      >
        {text.toUpperCase()}
      </Text>
    </Pressable>
  )
}

const s = StyleSheet.create({
  button: {
    backgroundColor: Colors.accent,
    paddingHorizontal: 40,
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
  },
  textButton: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
})
