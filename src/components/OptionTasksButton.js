import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { SIZES, COLORS } from '../utils/theme'

export const OptionTasksButton = ({ nameButton }) => {
  return (
    <TouchableOpacity
      style={
        (SIZES.padding,
        SIZES.radius,
        {
          backgroundColor: COLORS.darkgray,
          padding: SIZES.padding * 1.5,
          marginHorizontal: 5,
          borderRadius: SIZES.radius
        })
      }
    >
      <Text>{nameButton}</Text>
    </TouchableOpacity>
  )
}
