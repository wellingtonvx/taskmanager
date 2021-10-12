import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export const ProjectCar = () => {
  return (
    <LinearGradient
      colors={['#9C2CF3', '#6C3AF6', '#3A49F9']}
      style={styles.container}
    >
      <View>
        <Text>Projeto 1</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 240,
    borderRadius: 20,
    marginVertical: 20,
    marginLeft: 15
  }
})
