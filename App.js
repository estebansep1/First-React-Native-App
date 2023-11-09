import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/Screens/CurrentWeather'
import UpcomingWeather from './src/Screens/UpcomingWeather'

const App = () => {
  return (
    <View style={styles.container}>
      <UpcomingWeather />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
