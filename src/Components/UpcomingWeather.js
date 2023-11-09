import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

export default function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Upcoming Weather</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
