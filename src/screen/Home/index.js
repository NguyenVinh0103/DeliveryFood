import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Home = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.txt}>index</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1 ,
    justifyContent: 'center',
    alignItems: "center"
  }
})