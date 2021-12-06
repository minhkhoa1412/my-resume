import React, { useEffect, useRef, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { CARD_HEIGHT, CARD_HEIGHT_EXPANDED, PersonalInformation } from './components/PersonalInformation'
import { FloatingButton } from './components/FloatingButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatePresence, MotiView } from 'moti'
import { Colors } from '../../utils/Colors'
import { Summary } from './components/Summary'
import { duration } from '../../utils/Duration'
import { HEADER_HEIGHT, ColorHeaderBackground } from '../../components/ColorHeaderBackground'

export const HomeScreen = ({ navigation }) => {
  const safeAreaInset = useSafeAreaInsets()
  const nextScreen = useRef()
  const [isFocus, setIsFocus] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      setTimeout(() => setIsFocus(true), 300)
    })

    return () => {
      listener?.()
    }
  }, [])

  useEffect(() => {
    if (!isFocus) {
      setTimeout(() => {
        setIsExpanded(false)
        navigation.navigate(nextScreen.current)
      }, 1000)
    }
  }, [isFocus])


  return (
    <View style={s.container}>
      <AnimatePresence>
        {isFocus && (
          <MotiView style={s.container}>
            <ColorHeaderBackground />
            <MotiView
              style={s.containerPersonalInformation}
              animate={{ top: HEADER_HEIGHT - 70 }}
            >
              <PersonalInformation
                navigation={navigation}
                isExpanded={isExpanded}
                onPress={() => {
                  setIsExpanded(!isExpanded)
                }}
                onPressProject={() => {
                  nextScreen.current = 'Project'
                  setIsFocus(false)
                }}
                onPressHistory={() => {
                  nextScreen.current = 'History'
                  setIsFocus(false)
                }}
              />
            </MotiView>
            <View style={[s.containerFloatingButton, { bottom: safeAreaInset.bottom }]}>
              <FloatingButton/>
            </View>
            <MotiView
              style={{
                flex: 1,
                padding: 20,
                paddingTop: 30
              }}
              animate={{ marginTop: HEADER_HEIGHT + (isExpanded ? CARD_HEIGHT_EXPANDED : CARD_HEIGHT) - 70 }}
              transition={{ delay: isExpanded ? 0 : duration.DELAY_HEIGHT_CARD_VIEW }}
            >
              <Summary/>
            </MotiView>
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
  backgroundView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderBottomRightRadius: 100,
    backgroundColor: Colors.accent
  },
  containerPersonalInformation: {
    position: 'absolute',
    left: 30,
    right: 30
  },
  containerFloatingButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 1
  }
})
