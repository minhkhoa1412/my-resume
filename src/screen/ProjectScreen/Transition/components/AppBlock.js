import React, { useEffect } from 'react'
import { Dimensions, Image, Platform, Pressable, StyleSheet, Text, View } from 'react-native'

import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  measure,
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedProps,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay, withRepeat,
  withSpring,
  withTiming
} from 'react-native-reanimated'
import { PanGestureHandler, ScrollView } from 'react-native-gesture-handler'
import { BlurView } from '@react-native-community/blur'
import { Content } from './Content'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { duration } from '../../../../utils/Duration'
import { repeat } from 'rxjs'

const WINDOW = Dimensions.get('window')
const THUMBNAIL_HEIGHT = WINDOW.height * 0.4
const ADJUST_VIEW = 15

const THUMBNAIL_IMAGE_SCALE_FACTOR = 1.2

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView)
const AnimatedPanGestureHandler = Animated.createAnimatedComponent(PanGestureHandler)
const AnimatedTextView = Animated.createAnimatedComponent(Text)
const AnimatedImage = Animated.createAnimatedComponent(Image)

const AppBlock = ({
  project,
  index,
  isShowingDetails,
  showingStateChanged
}) => {
  const isShowingContent = useDerivedValue(() => {
    return isShowingDetails.value
  })
  const inset = useSafeAreaInsets()
  const boxWrapperRef = useAnimatedRef()
  const scrollViewRef = useAnimatedRef()

  const showingDetails = useSharedValue(false)
  const blurViewOpacity = useSharedValue(0)
  const boxWrapperHeight = useSharedValue(THUMBNAIL_HEIGHT)
  const boxWrapperPositionHorizontal = useSharedValue(0)
  const boxWrapperPositionTop = useSharedValue(0)

  const scrollViewBorderRadius = useSharedValue(16)
  const scrollViewScale = useSharedValue(1)
  const scrollViewScrollEnabled = useSharedValue(false)
  const scrollViewBounces = useSharedValue(false)
  const pressedScale = useSharedValue(1)
  const imageSlideAnimation = useSharedValue(0)

  const thumbnailHeight = useSharedValue(THUMBNAIL_HEIGHT)
  const Android_ThumbnailBorderRadiusBottom = useSharedValue(16)  //overflow: 'hidden' not working on android

  useEffect(() => {
    const { height: IMAGE_HEIGHT } = Image.resolveAssetSource(project.cover.source)

    imageSlideAnimation.value = withRepeat(
      withTiming(
        -IMAGE_HEIGHT + THUMBNAIL_HEIGHT, { duration: 10000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
      999,
      true
    )
  }, [])

  const showAppDetails = () => {
    if (isShowingContent.value || showingDetails.value) {
      return
    }
    showingStateChanged()

    runOnUI(() => {
      'worklet'
      showingDetails.value = true
      blurViewOpacity.value = withDelay(150, withTiming(1, { duration: 150 }))

      boxWrapperHeight.value = withTiming(WINDOW.height + ADJUST_VIEW + inset.bottom, {
        duration: 400
      })
      const { pageX, pageY } = measure(boxWrapperRef)
      boxWrapperPositionHorizontal.value = withTiming(-pageX)
      boxWrapperPositionTop.value = withSpring(-pageY - ADJUST_VIEW, {
        damping: 15
      })

      scrollViewBorderRadius.value = withTiming(0, { duration: 500 })
      scrollViewScrollEnabled.value = true

      thumbnailHeight.value = withSpring(THUMBNAIL_HEIGHT * THUMBNAIL_IMAGE_SCALE_FACTOR)
      Android_ThumbnailBorderRadiusBottom.value = withTiming(0)
    })()
  }

  const hideAppDetails = () => {
    showingStateChanged()
    runOnUI(() => {
      'worklet'
      showingDetails.value = false
      blurViewOpacity.value = withTiming(0, { duration: 100 })

      boxWrapperHeight.value = withTiming(THUMBNAIL_HEIGHT)
      boxWrapperPositionHorizontal.value = withTiming(0)
      boxWrapperPositionTop.value = withSpring(0, { damping: 15 })

      scrollViewBorderRadius.value = withTiming(16)
      scrollViewScrollEnabled.value = false
      scrollViewScale.value = withTiming(1)

      thumbnailHeight.value = withTiming(THUMBNAIL_HEIGHT)
      Android_ThumbnailBorderRadiusBottom.value = withTiming(16)
      scrollTo(scrollViewRef, 0, 0, true)
    })()
  }

  const blurViewStyles = useAnimatedStyle(() => {
    return { opacity: blurViewOpacity.value }
  })
  const containerZIndex = useAnimatedStyle(() => {
    return { zIndex: showingDetails.value ? 10 : withTiming(0) }  //withTiming -> wait for the closing animation
  })
  const boxWrapperStyles = useAnimatedStyle(() => {
    return {
      left: boxWrapperPositionHorizontal.value,
      right: boxWrapperPositionHorizontal.value,
      top: boxWrapperPositionTop.value,
      height: boxWrapperHeight.value,
      transform: [{ scale: scrollViewScale.value }]
    }
  })
  const scrollViewAnimatedProps = useAnimatedProps(() => {
    return {
      scrollEnabled: scrollViewScrollEnabled.value,
      bounces: scrollViewBounces.value,
      transform: [{ scale: pressedScale.value }]
    }
  })
  const scrollViewStyles = useAnimatedStyle(() => {
    return { borderRadius: scrollViewBorderRadius.value }
  })
  const imageSlideAnimationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: imageSlideAnimation.value
        }
      ]
    }
  })


  const gestureEventHandler = useAnimatedGestureHandler({
    onActive: ({ translationY }) => {
      const inputRange = [0, 100]
      if (translationY > 0) {
        scrollViewScale.value = interpolate(translationY, inputRange, [1, 0.85], Extrapolate.CLAMP)
        scrollViewBorderRadius.value = interpolate(translationY, inputRange, [0, 16], Extrapolate.CLAMP)
      }
    },
    onEnd: () => {
      if (scrollViewScale.value > 0.9) {
        scrollViewScale.value = withTiming(1)
        scrollViewBorderRadius.value = withTiming(0)
      } else {
        runOnJS(hideAppDetails)()
      }
    }
  })
  const panGestureHandlerProps = useAnimatedProps(() => {
    return { enabled: showingDetails.value }
  })
  const thumbnailStyles = useAnimatedStyle(() => {
    return { height: thumbnailHeight.value }
  })
  const Android_thumbnailImageStyles = useAnimatedProps(() => {
    return {
      borderTopLeftRadius: scrollViewBorderRadius.value,
      borderTopRightRadius: scrollViewBorderRadius.value,
      borderBottomLeftRadius: Android_ThumbnailBorderRadiusBottom.value,
      borderBottomRightRadius: Android_ThumbnailBorderRadiusBottom.value
    }
  })

  return (
    <>
      <Animated.View
        pointerEvents="none"
        style={[styles.blurViewWrapper, blurViewStyles, { bottom: inset.bottom }]}
      >
        {Platform.OS !== 'android'
          ? <BlurView
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor="white"
            style={{ flex: 1 }}/>
          : <View style={{
            flex: 1,
            backgroundColor: '#000',
            opacity: 0.9
          }}/>
        }
      </Animated.View>

      <Animated.View style={[styles.container, containerZIndex, { marginTop: index === 0 && 130 }]}>
        <Animated.View
          style={[boxWrapperStyles, { position: 'absolute' }]}
          ref={boxWrapperRef}
        >
          <AnimatedScrollView
            style={[scrollViewStyles, { backgroundColor: '#FFFFFF' }]}
            animatedProps={scrollViewAnimatedProps}
            showsVerticalScrollIndicator={false}
            ref={scrollViewRef}
            onScroll={useAnimatedScrollHandler((event) => {
              const scrollViewHeight = measure(scrollViewRef).height
              scrollViewBounces.value = event.contentOffset.y > scrollViewHeight / 2
            })}
            scrollEventThrottle={16}
          >
            <AnimatedPanGestureHandler
              onGestureEvent={gestureEventHandler}
              animatedProps={panGestureHandlerProps}
            >
              <Pressable
                onPress={() => {
                  pressedScale.value = withSpring(1)
                  showAppDetails()
                }}
                onTouchStart={() => pressedScale.value = withTiming(showingDetails.value ? 1 : 0.98)}
                onTouchCancel={() => pressedScale.value = withTiming(1)}
                onTouchEnd={() => pressedScale.value = withTiming(1)}
              >
                <Animated.View style={thumbnailStyles}>
                  <View style={styles.titleWrapper}>
                    <AnimatedTextView
                      style={[
                        styles.title,
                        { color: '#FFFFFF' }
                      ]}
                    >
                      {project.title}
                    </AnimatedTextView>
                  </View>
                  <Animated.View
                    style={[Platform.OS === 'android' && Android_thumbnailImageStyles, {
                      overflow: 'hidden',
                      flex: 1
                    }]}
                  >
                    <LinearGradient
                      colors={['transparent', 'transparent', '#212121']}
                      style={[{ zIndex: 6 }, StyleSheet.absoluteFill]}
                    />
                    <AnimatedImage
                      source={project.cover.type === 'local' ? project.cover.source : { uri: project.cover.source }}
                      style={[styles.imageStyles, imageSlideAnimationStyle]}
                      resizeMode="cover"
                    />
                  </Animated.View>
                  <View style={styles.descriptionWrapper}>
                    <Text style={[styles.description, { color: '#FFFFFF' }]}>{project.description}</Text>
                  </View>
                </Animated.View>
              </Pressable>
            </AnimatedPanGestureHandler>
            <Content/>
          </AnimatedScrollView>

          {Platform.OS !== 'android' && (
            <View/>
          )}
        </Animated.View>
      </Animated.View>
    </>
  )
}

const styles = StyleSheet.create({
  blurViewWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: 5
  },
  container: {
    position: 'relative',
    width: '100%',
    height: THUMBNAIL_HEIGHT,
    marginBottom: 40,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 2,
      height: 6
    },
    shadowRadius: 6,
    shadowOpacity: 0.3
  },
  titleWrapper: {
    position: 'absolute',
    bottom: 50,
    width: WINDOW.width - 66,
    paddingHorizontal: 15,
    zIndex: 10
  },
  title: {
    fontSize: WINDOW.width * 0.075,
    fontWeight: '700'
  },
  imageStyles: {
    width: '100%',
    zIndex: 5
  },
  descriptionWrapper: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    paddingHorizontal: 15,
    maxWidth: WINDOW.width * 0.85,
    zIndex: 10
  },
  description: {
    fontSize: WINDOW.width * 0.04
  }
})

export default AppBlock
