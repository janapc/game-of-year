import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import gamesScreen from '../pages/games'
import searchScreen from '../pages/search'
import winnerScreen from '../pages/winner'

const Tab = createBottomTabNavigator()

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: '#343434',
        tabBarInactiveTintColor: 'rgba(52, 52, 52, 0.76)',
        tabBarStyle: {
          backgroundColor: '#FFC947',
        },
        headerStyle: {
          backgroundColor: '#1B1A17',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFC947',
      })}
    >
      <Tab.Group>
        <Tab.Screen
          name="Games"
          component={gamesScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={
                  focused
                    ? 'ios-game-controller'
                    : 'ios-game-controller-outline'
                }
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={searchScreen}
          options={{
            headerShown: false,
            headerTransparent: true,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Winner"
          component={winnerScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons
                name={focused ? 'trophy' : 'trophy-outline'}
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  )
}
