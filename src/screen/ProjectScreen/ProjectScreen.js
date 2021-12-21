import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { AnimatePresence, MotiView } from 'moti'
import { ColorHeaderBackground } from '../../components/ColorHeaderBackground'
import { colors } from '../../utils/Colors'
import { BackButton } from '../../components/BackButton'
import Animated, { useAnimatedProps, useSharedValue } from 'react-native-reanimated'
import AppBlock from './Transition/components/AppBlock'
import { posts } from './Transition/data/posts'

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)

export const ProjectScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(true)

  useEffect(() => {
    if (!isFocus) {
      setTimeout(() => {
        navigation.navigate('Home')
      }, 100)
    }
  }, [isFocus])

  const isShowingDetails = useSharedValue(false)

  const animatedProps = useAnimatedProps(() => {
    return { scrollEnabled: !isShowingDetails.value }
  })

  const onShowingStateChanged = () => {
    'worklet'
    isShowingDetails.value = !isShowingDetails.value
  }

  return (
    <View style={s.container}>
      <AnimatePresence>
        {isFocus && (
          <MotiView style={s.container}>
            <ColorHeaderBackground title="Projects" colors={colors.gradientProjectScreen}/>
            <BackButton onPress={() => setIsFocus(false)}/>

            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ flex: 1 }}
            >
              <AnimatedScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 45 }}
                animatedProps={animatedProps}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
              >
                {posts.map((post, index) => (
                  <AppBlock
                    key={index}
                    index={index}
                    post={post}
                    isShowingDetails={isShowingDetails}
                    showingStateChanged={onShowingStateChanged}
                  />
                ))}
              </AnimatedScrollView>
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
  }
})
