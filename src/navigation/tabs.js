import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'

import { Home } from '../screens/Home'
import { TaskCalendar } from '../screens/TaskCalender'
import { CreateTask } from '../screens/CreateTask'

import icons from '../utils/icons'
import { COLORS } from '../utils/theme'

const Tab = createBottomTabNavigator()

function TabBarCustonButton({ accessibilityState, children, onPress }) {
  var isSelected = accessibilityState.selected

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginBottom: 50 }}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={COLORS.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: COLORS.secondary }}></View>
        </View>

        <TouchableOpacity
          style={{
            top: -15.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    )
  } else {
    {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            height: 60,
            backgroundColor: COLORS.white
          }}
          activeOpacity={1}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      )
    }
  }
}

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: focused ? 45 : 30,
                height: focused ? 45 : 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="TaskCalendar"
        component={TaskCalendar}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.calendar}
              resizeMode="contain"
              style={{
                width: focused ? 45 : 30,
                height: focused ? 45 : 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="CreateTask"
        component={CreateTask}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={{
                width: focused ? 45 : 30,
                height: focused ? 45 : 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={CreateTask}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: focused ? 45 : 30,
                height: focused ? 45 : 30,
                tintColor: focused ? COLORS.primary : COLORS.secondary
              }}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}
