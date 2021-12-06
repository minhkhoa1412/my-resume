import React from 'react'
import { Dimensions, StyleSheet, View, Text, Image } from 'react-native'
import { MotiView } from 'moti'

const { width } = Dimensions.get('window')

export const HistoryItem = ({ children }) => {
  const uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'

  return (
    <MotiView
      from={{ opacity: 0, scale: 0 }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      style={s.container}
    >
      <Image style={s.image} source={{ uri }} />
      <View style={s.content}>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
        <Text>asjdhasjkhfgasdhlfgjilk</Text>
      </View>
    </MotiView>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.86,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 10,
    marginBottom: 40
  },
  content: {
    backgroundColor: '#A770EF',
    width: '98%',
    alignSelf: 'center',
    borderRadius: 20,
    padding: 10
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    margin: 16
  }
})
