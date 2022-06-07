import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Component/Header'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
// import {LinearGradient} from 'expo-linear-gradient';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <SafeAreaView >
      <View style={styles.container}>
      <View style={[styles.headerStyle, {flex: 1}]}>
        <Header></Header>
        
        <View style={styles.heading}>
          <View>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 24,}}>Covid 19</Text>
          </View>
          <View style={styles.countries}>
          <View style={styles.country}>
            <Image style={{borderRadius: 15}} source={require('../assets/country.png')}></Image>
            <Text style={{paddingHorizontal: 10}}>USA</Text>
            <MaterialIcons name="arrow-drop-down" size={24} color="black" />
          </View>
          </View>
        </View>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold', marginHorizontal: 15}}>Are you feeling sick?</Text>
        <Text style={styles.details}>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
        <View style={styles.info}>
          <View style={styles.message}>
          <Ionicons style = {{color: '#fff'}} name="ios-call" size={24} color="black" />
          <Text style={{color: '#fff', marginLeft: 5}}>Call Now</Text>
          </View>
          <Pressable >
          <View style={styles.message1}>
          <Feather style = {{color: '#fff'}} name="message-circle" size={24} color="black" />
          <Text  onPress={()=>{navigation.navigate('Details')}}  style = {{color: '#fff', marginLeft: 5}}>Send Message</Text>
          </View>
          </Pressable>
        </View>
        </View>
      </View>
      <View style ={styles.prevent}>
      <Text style={{fontSize: 24, margin: 15, fontWeight: 'bold'}}>Prevention</Text>
      <View style ={styles.preventDetails}>
        <View style={styles.preventSingle}>
        <Image source={require('../assets/pre1.png')}></Image>
        <Text style={{fontWeight: '500', lineHeight: 18, fontSize: 20, textAlign: "center", marginTop: 8}}>Avoid close contact</Text>
        </View>
        <View style={styles.preventSingle}>
        <Image source={require('../assets/pre2.png')}></Image>
        <Text style={{fontWeight: '500', lineHeight: 18, fontSize: 20, textAlign: "center", marginTop: 8}}>Clean your hands often</Text>
        </View>
        <View style={styles.preventSingle}>
        <Image source={require('../assets/pre3.png')}></Image>
        <Text style={{fontWeight: '500', lineHeight: 18, fontSize: 20, textAlign: "center", marginTop: 8}}>Wear a facemask</Text>
        </View>
      </View>
      </View>
      <View style={{marginVertical: 30}}>
      <LinearGradient style={{marginHorizontal: 15, borderRadius: 15}} colors={['#56549E',  '#AEA1E6']}>
      <View>
      <View style={styles.test}>
      <Image style={{height: 145, width: 140, marginTop: -15, marginRight: 10}} source={require('../assets/Group.png')}></Image>
      <View style={styles.singleTest}>
        <Text style={{fontWeight: '500', lineHeight: 18, color: '#fff', fontSize: 20, marginBottom: 10}}>Do your own test!</Text>
        <Text style={{fontWeight: '500', lineHeight: 18, color: '#fff', width: 170}}>Follow the instructions to do your own test.</Text>
      </View>
      </View>
      </View>
      </LinearGradient>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: '#473F97' ,
    height: 370,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    color: '#FFFFFF'
  },
  heading:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -50,
    marginHorizontal: 15,
    color: "#ffffff"


  },
  country:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    borderRadius: 25,
    
    
  },
  countries:{
    height: 60,
    
  },
  details:{
    color: '#cfcfcf',
    fontSize: 14,
    lineHeight: 22,
    marginHorizontal: 15,
    lineHeight: 22,
    marginTop: 10,

  },
  info:{
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 25,
  },
  message:{
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FF4D58',
    borderRadius: 25
  },
  message1:{
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#4D79FF',
    borderRadius: 25,
  },
  prevent:{

  },
  preventDetails:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,

  },
  preventSingle:{
    width: 120,
    alignItems: 'center',
  },
  test:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    height: 130,
    // marginVertical: 30
    // height: 300,
  },
  singleTest:{
    marginHorLeft: 20,
    paddingRight: 0
  }


  
})