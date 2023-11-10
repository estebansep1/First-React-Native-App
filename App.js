import React from 'react'
import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/Screens/CurrentWeather'
import UpcomingWeather from './src/Screens/UpcomingWeather'
import City from './src/Screens/City'

const App = () => {
  return (
    <View style={styles.container}>
      <City />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
