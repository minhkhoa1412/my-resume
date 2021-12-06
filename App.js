import React from 'react'
import {
  StyleSheet, useColorScheme, View
} from 'react-native'
import 'react-native-reanimated'
import { HomeScreen } from './src/screen/HomeScreen/HomeScreen'
import { SafeAreaProvider } from 'react-native-safe-area-context/src/SafeAreaContext'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from '@react-navigation/stack'
import { ProjectScreen } from './src/screen/ProjectScreen/ProjectScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HistoryScreen } from './src/screen/HistoryScreen/HistoryScreen'

const Stack = createStackNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }}
          />
          <Stack.Screen
            name="Project"
            component={ProjectScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }}
          />
          <Stack.Screen
            name="History"
            component={HistoryScreen}
            options={{
              cardStyleInterpolator: CardStyleInterpolators.forNoAnimation
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App
