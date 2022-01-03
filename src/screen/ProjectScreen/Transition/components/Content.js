import React from 'react'
import { View, Text, Dimensions, StyleSheet, FlatList, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { RFValue } from 'react-native-responsive-fontsize'
import { myCV } from '../../../../data/cv'

const WINDOW = Dimensions.get('window')
const PADDING_HORIZONTAL = 20

export const Content = ({ project }) => {
  const inset = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingBottom: inset.bottom }}>
      <View style={styles.content}>
        <Text style={styles.text}>
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have
          tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with
          other cursor position commands, though those felt clunky and non-robust.
        </Text>

        <FlatList
          style={styles.list}
          horizontal={true}
          data={myCV.project[0].screenshots}
          renderItem={({ item }) => {
            return (
              <View style={styles.image}>
                <Image
                  source={{ uri: item }}
                  resizeMode={'cover'}
                  borderRadius={20}
                  style={{
                    width: 200,
                    height: 400
                  }}
                />
              </View>
            )
          }}
        />

        <Text style={styles.text}>
          I'm writing a Vim plugin which will need to surround the word directly under your cursor with a quotes. I have
          tried using simple solutions which use commands like "b" and "e" executed in normal mode, in combination with
          other cursor position commands, though those felt clunky and non-robust.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingVertical: 30
  },
  text: {
    marginHorizontal: PADDING_HORIZONTAL,
    fontSize: Math.min(WINDOW.width * 0.053, 20),
    color: '#989898'
  },
  list: {
    flex: 1
  },
  image: {
    borderRadius: 20,
    padding: PADDING_HORIZONTAL,
    overflow: 'hidden',
    elevation: 5,
    shadowOffset: {
      width: 4,
      height: 4
    },
    shadowRadius: 10,
    shadowOpacity: 0.3
  }
})
