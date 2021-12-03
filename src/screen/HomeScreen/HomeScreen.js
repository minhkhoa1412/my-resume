import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { CARD_HEIGHT, CARD_HEIGHT_EXPANDED, PersonalInformation } from './components/PersonalInformation'
import { FloatingButton } from './components/FloatingButton'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AnimatePresence, MotiView } from 'moti'
import { Colors } from '../../utils/Colors'
import { Summary } from './components/Summary'
import { useFocusEffect } from '@react-navigation/native'
import { duration } from '../../utils/Duration'

const { height } = Dimensions.get('window')
const COLOR_HEIGHT_FROM = height * 0.27
const COLOR_HEIGHT_TO = height * 0.35

export const HomeScreen = ({ navigation }) => {
  const safeAreaInset = useSafeAreaInsets()
  const [backgroundHeight, setBackgroundHeight] = useState(COLOR_HEIGHT_FROM)
  const [isFocus, setIsFocus] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const listener = navigation.addListener('focus', () => setIsFocus(true))

    return () => {
      listener?.()
    }
  }, [])

  useEffect(() => {
    if (!isFocus) {
      setTimeout(() => {
        setIsExpanded(false)
        navigation.navigate('Project')
      }, 1500)
    }
  }, [isFocus])

  function backgroundView() {
    return (
      <MotiView
        key="backgroundView"
        style={s.backgroundView}
        from={{ height: 0 }}
        exit={{ height: 0 }}
        animate={{ height: backgroundHeight }}
        exitTransition={{ type: 'timing' }}
      />
    )
  }

  return (
    <View style={s.container}>
      <AnimatePresence>
        {isFocus && (
          <MotiView style={s.container}>
            {backgroundView()}
            <MotiView
              style={s.containerPersonalInformation}
              animate={{ top: backgroundHeight - 70 }}
            >
              <PersonalInformation
                navigation={navigation}
                isExpanded={isExpanded}
                onPress={() => {
                  setIsExpanded(!isExpanded)
                }}
                onPressNegative={() => {
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
              animate={{ marginTop: backgroundHeight + (isExpanded ? CARD_HEIGHT_EXPANDED : CARD_HEIGHT) - 70 }}
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
