import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, View, Text, Image, Pressable } from 'react-native'
import { motify, MotiView, useAnimationState } from 'moti'
import { Easing } from 'react-native-reanimated'
import { RowContent } from './RowContent'
import { colors } from '../../../utils/Colors'
import { fonts } from '../../../utils/Fonts'
import LinearGradient from 'react-native-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'

const { width } = Dimensions.get('window')
const MotiPressable = motify(Pressable)()
const PADDING_BOTTOM_CONTENT = 20

export const HistoryItem = ({ item, index }) => {
  const uri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'
  const [isExpanded, setIsExpanded] = useState(false)
  const contentHeight = useRef(0)
  const initContentHeight = useRef(100)
  const timeoutIntro = useRef(null)
  const timeoutIntro1 = useRef(null)

  useEffect(() => {
    if (index === 0) {
      timeoutIntro.current = setTimeout(() => setIsExpanded(true), 1000)
      timeoutIntro1.current = setTimeout(() => setIsExpanded(false), 1600)
    }

    return () => {
      timeoutIntro.current && clearTimeout(timeoutIntro.current)
      timeoutIntro1.current && clearTimeout(timeoutIntro1.current)
    }
  }, [])

  return (
    <MotiView
      from={{
        opacity: 0, transform: [{ scale: 0 }, { translateY: -200 }]
      }}
      exit={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        transform: [{ scale: 1 }, { translateY: 0 }]
      }}
      style={s.container}
    >
      <View style={s.rowInformation}>
        <Image
          style={s.image}
          source={{ uri }}
        />
        <View>
          <Text style={s.textCompany}>{item.employer}</Text>
          <Text style={s.textDate}>{`${item.startDate} - ${item.endDate}`}</Text>
        </View>
      </View>

      <LinearGradient
        colors={index === 0 ? colors.gradientHistoryScreen : [...colors.gradientHistoryScreen].reverse()}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={s.jobTitleContainer}>
        <Text style={s.textJobTitle}>{item.jobTitle}</Text>
      </LinearGradient>

      <MotiPressable
        onPress={() => {
          setIsExpanded(!isExpanded)
        }}
        from={{ height: initContentHeight.current }}
        animate={{ height: isExpanded ? contentHeight.current : initContentHeight.current }}
        transition={{ type: 'timing', duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }}
        style={[s.content, { backgroundColor: index === 0 ? colors.gradientHistoryScreen[0] : colors.gradientHistoryScreen[1] }]}
      >
        <View
          onLayout={(e) => {
            contentHeight.current = e.nativeEvent.layout.height + PADDING_BOTTOM_CONTENT
          }}
        >

          {item.description.map((i) => {
            return (
              <RowContent key={i.id} text={i.text}/>
            )
          })}
        </View>
      </MotiPressable>
    </MotiView>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: width * 0.86,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginBottom: 40,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
  },
  content: {
    width: '98%',
    alignSelf: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    height: 60,
    overflow: 'scroll'
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10
  },
  rowInformation: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  textCompany: {
    fontSize: RFValue(15),
    fontFamily: fonts.poppinsMedium
  },
  textDate: {
    fontSize: RFValue(12),
    fontFamily: fonts.poppinsRegular
  },
  jobTitleContainer: {
    padding: 6,
    borderRadius: 12,
    paddingLeft: 20,
    marginBottom: 10,
    marginHorizontal: 4
  },
  textJobTitle: {
    color: colors.white,
    fontFamily: fonts.poppinsSemiBold,
    fontSize: RFValue(12)
  }
})
