import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { Avatar } from './Avatar'
import { MotiText, MotiView, AnimatePresence } from 'moti'
import { myCV } from '../../../data/cv'
import { colors } from '../../../utils/Colors'
import { ShadowButton } from '../../../components/ShadowButton'
import { duration } from '../../../utils/Duration'
import { Easing } from 'react-native-reanimated'
import { fonts } from '../../../utils/Fonts'
import { RFValue } from 'react-native-responsive-fontsize'

const IMAGE_HEIGHT = 170
const IMAGE_WIDTH = 120
export const CARD_HEIGHT_EXPANDED = 270
export const CARD_HEIGHT = 150

export const PersonalInformation = ({
  isExpanded, onPress, onPressProject, onPressHistory, onPressSkill
}) => {
  const uri = 'https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_2x3.jpg'

  return (
    <MotiView
      key="personalInformationRoot"
      from={{ opacity: 0, translateY: 80 }}
      exit={{ opacity: 0, translateY: 80 }}
      exitTransition={{ delay: 400 }}
      animate={{ opacity: 1, translateY: 0, height: isExpanded ? CARD_HEIGHT_EXPANDED : CARD_HEIGHT }}
      transition={{ delay: isExpanded ? 0 : duration.DELAY_HEIGHT_CARD_VIEW }}
      style={s.container}>
      <Avatar style={s.avatar} uri={uri}/>
      <MotiText
        key="personalInformationName"
        from={{ opacity: 0, translateY: 30 }}
        exit={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        style={s.textName}>
        {myCV.name}
      </MotiText>
      <MotiText
        key="personalInformationRole"
        from={{ opacity: 0, translateY: 30 }}
        exit={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 200 }}
        style={s.textRole}>{myCV.role}</MotiText>
      <AnimatePresence>
        {isExpanded && (
          <MotiView
            from={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exitTranstion={{ duration: 100 }}
            transition={{ type: 'timing', duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }}
            style={s.buttonRow}>
            <ShadowButton
              text="resume"
            />
            <ShadowButton
              colors={colors.gradientProjectScreen}
              text="project"
              onPress={onPressProject}
            />
            <ShadowButton
              colors={colors.gradientHistoryScreen}
              text="Employment History"
              onPress={onPressHistory}
            />
            <ShadowButton
              colors={colors.gradientSkillScreen}
              text="Skill"
              onPress={onPressSkill}
            />
          </MotiView>
        )}
      </AnimatePresence>
      <Pressable
        hitSlop={{ top: 14, bottom: 14, left: 14, right: 14 }}
        onPress={onPress}
        style={s.button}
      >
        <Text style={s.textButton}>{isExpanded ? 'LESS' : 'MORE'}</Text>
      </Pressable>
    </MotiView>
  )
}

const s = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowRadius: 10,
    shadowOpacity: 0.3,
    padding: 16,
    paddingLeft: IMAGE_WIDTH,
    height: CARD_HEIGHT
  },
  avatar: {
    position: 'absolute',
    top: -(IMAGE_HEIGHT - 100),
    left: -20
  },
  textName: {
    color: 'black',
    fontSize: RFValue(22),
    fontFamily: fonts.poppinsSemiBold
  },
  textRole: {
    fontSize: RFValue(14),
    color: colors.textContent,
    paddingTop: 4,
    fontFamily: fonts.poppinsRegular
  },
  button: {
    position: 'absolute',
    bottom: 14,
    right: 18
  },
  textButton: {
    color: colors.accent,
    fontFamily: fonts.poppinsSemiBold
  },
  buttonRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 14,
    position: 'absolute',
    top: 110,
    bottom: 40,
    left: 0,
    right: 0
  }
})
