import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'


export default function Details() {
  return (
    <ScrollView>
    <SafeAreaView>
        <View>
            <View>
                <Image style={{height: 300}} source={require('../assets/Media.png')}></Image>
            </View>
            <View style={styles.buston}>
                <View style={styles.bustonDetails}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', }}>Boston Lettuce</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    buston:{
        marginTop: -30,
        width: '100%',
        borderTopStartRadius: 25,
        borderTopEndRadius: 25,
        backgroundColor: '#fff'
    },
    bustonDetails: {
        marginTop: 30,
        marginHorizontal: 15,
        
    }
})