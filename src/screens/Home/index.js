import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import { styles } from './styles'

export const Home = () => {
  return (
    <SafeAreaView style={styles.HomeContainer}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
}
