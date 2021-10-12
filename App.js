import { StatusBar } from 'expo-status-bar'
import React, { useState, useEffect } from 'react'
import { loadAsync } from 'expo-font'

import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './src/routes/app.routes'

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  async function loadFonts() {
    await loadAsync({
      'Poppins-Regular': {
        uri: require('./src/assets/fonts/Poppins-Regular.ttf')
      },
      'Poppins-SemiBold': {
        uri: require('./src/assets/fonts/Poppins-SemiBold.ttf')
      },
      'Poppins-Bold': {
        uri: require('./src/assets/fonts/Poppins-Bold.ttf')
      }
    })

    setFontsLoaded(true)
  }

  useEffect(() => {
    loadFonts()
  }, [])

  return fontsLoaded ? (
    <NavigationContainer>
      <AppRoutes />
      <StatusBar />
    </NavigationContainer>
  ) : null
}
