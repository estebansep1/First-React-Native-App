/* eslint-disable no-unused-vars */
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Components/Tabs'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'
import useGetWeather from './src/Hooks/useGetWeather'

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
