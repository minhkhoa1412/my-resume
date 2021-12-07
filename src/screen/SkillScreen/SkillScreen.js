import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AnimatePresence, MotiText, MotiView } from 'moti'
import { ColorHeaderBackground, HEADER_HEIGHT } from '../../components/ColorHeaderBackground'
import { colors } from '../../utils/Colors'
import { images } from '../../utils/Images'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { BackButton } from '../../components/BackButton'
import { RFValue } from 'react-native-responsive-fontsize'
import { fonts } from '../../utils/Fonts'
import { duration } from '../../utils/Duration'
import { myCV } from '../../data/cv'
import { SkillItem } from './components/SkillItem'
import { SkillBlock } from './components/SkillBlock'

export const SkillScreen = ({ navigation }) => {
  const [isFocus, setIsFocus] = useState(true)
  const inset = useSafeAreaInsets()

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
            <ColorHeaderBackground title="Skills" colors={colors.gradientSkillScreen}/>
            <BackButton
              onPress={() => setIsFocus(false)}
            />

            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={[s.content, { paddingTop: HEADER_HEIGHT + 10, paddingBottom: inset.bottom + 70 }]}>

              <SkillBlock title="Languages" skills={myCV.skills.languages}/>
              <SkillBlock title="Framework" skills={myCV.skills.framework}/>
              <SkillBlock title="Version Control" skills={myCV.skills.versionControl}/>
              <SkillBlock title="Programming Paradigm" skills={myCV.skills.programmingParadigm}/>

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
  iconBack: {
    width: 25,
    height: 25,
    tintColor: colors.black
  },
  content: {
    paddingHorizontal: 20
  }
})
