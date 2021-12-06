import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatePresence, MotiView } from 'moti'
import { ColorHeaderBackground, HEADER_HEIGHT } from '../../components/ColorHeaderBackground'
import { Colors } from '../../utils/Colors'
import { HistoryItem } from './components/HistoryItem'

export const HistoryScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(true)

  useEffect(() => {
    if (!isFocus) {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 100)
    }
  }, [isFocus])

  return (
    <View style={s.container}>
      <AnimatePresence>
        {isFocus && (
          <MotiView style={s.container}>
            <ColorHeaderBackground colors={Colors.gradientHistory} />
            <TouchableOpacity onPress={() => setIsFocus(false)} style={{
              position: 'absolute',
              top: 100,
              left: 100,
              zIndex: 1
            }}>
              <Text>History Screen</Text>
            </TouchableOpacity>

            <ScrollView
              contentContainerStyle={[s.scrollView, { marginTop: HEADER_HEIGHT - 70 }]}
            >
              <HistoryItem />
              <HistoryItem />
            </ScrollView>
          </MotiView>
        )}
      </AnimatePresence>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
  }
})
