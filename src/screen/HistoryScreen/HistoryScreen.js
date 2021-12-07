import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { AnimatePresence, MotiView } from 'moti'
import { ColorHeaderBackground, HEADER_HEIGHT } from '../../components/ColorHeaderBackground'
import { colors } from '../../utils/Colors'
import { HistoryItem } from './components/HistoryItem'
import { myCV } from '../../data/cv'
import { BackButton } from '../../components/BackButton'

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
            <ColorHeaderBackground title={'Employment History'} colors={colors.gradientHistoryScreen}/>
            <BackButton
              onPress={() => setIsFocus(false)}
            />

            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={[s.scrollView, { paddingTop: HEADER_HEIGHT - 70 }]}
            >
              {myCV.history.map((item, index) => (
                <HistoryItem key={item.employer} index={index} item={item}/>
              ))}
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
    alignItems: 'center',
    paddingBottom: 30
  },
  iconBack: {
    width: 25,
    height: 25
  }
})
