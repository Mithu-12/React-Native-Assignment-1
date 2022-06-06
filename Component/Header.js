import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Header() {
  return (
    <View style={[styles.header1, {flex: 1, color: '#fff'}]}>
      <Ionicons style = {{color: '#fff'}} name="menu-outline" size={24} color="black" />
      <Ionicons style = {{color: '#fff'}} name="ios-notifications-outline" size={24} color="black" />

    </View>
  )
}
const styles = StyleSheet.create({
    header1:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 15,
        color: '#fff'
        
    }
})