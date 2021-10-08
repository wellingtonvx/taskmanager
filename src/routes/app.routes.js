import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { TaskCalendar } from '../screens/TaskCalender'
import { CreateTask } from '../screens/CreateTask'
import { TabNavigator } from '../navigation/tabs'

const { Navigator, Screen } = createStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'Home'}
    >
      <Screen name="TabNavigator" component={TabNavigator} />
      <Screen name="TaskCalendar" component={TaskCalendar} />
      <Screen name="CreateTask" component={CreateTask} />
    </Navigator>
  )
}
