import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import gameScreen from '../pages/game'

import { Game } from '../api/GameApi'
import Home from './tab'

export type propsNavigationStack = {
  Home: undefined
  Game: Game
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>

const Stack = createNativeStackNavigator<propsNavigationStack>()

export default function Routes() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={gameScreen}
            options={{
              animation: 'fade',
              headerShown: false,
              headerTransparent: true,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
