import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Roundup() {
  return (
    <View>
      <Text style={styles.container}>Roundup</Text>
    </View>
  )
};
const styles = StyleSheet.create({
    container: {
      color: '#FFA500',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 400,
    },
});