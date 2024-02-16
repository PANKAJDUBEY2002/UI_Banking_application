import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/EvilIcons';
import IconExample from './IconExample';
import Search from './Search';
export default function Menu() {
  return (
    <View style={styles.main}>
        <View style={styles.dir}>
           <View style={styles.text}>
              <Text style={styles.do}>Done</Text>
           </View>
            
           <View >
           <Image
             source = {require('./logo.jpg')} 
             style={styles.logo} />
             
           </View>
          
        </View>
        <View style={styles.below}>
           
         <View style={styles.firstIcon}>
         <Search />
         </View>
         <View style={styles.secondIcon}>
          <Icon name="credit-card" size={40} color='black' />
         </View>
         <View style={styles.thirdIcon}>
         <IconExample />
         </View>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        
        height: 40,
      
    },
    logo: {
        height :60,
        width: 60,
        borderRadius: 60/2,
        backgroundColor: 'red',
        marginLeft: 10
    },
    do: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#2C3335'
    },
    dir: {
      flex: 1,
      flexDirection: 'row'
    },
    main: {
      flex: 1,
      flexDirection: 'row'
    },
    below: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 40
    },
    firstIcon: {
      marginLeft: -100,
      marginTop: -25,
      width: 180,
      height: 10
      
    },
    secondIcon: {
      marginLeft: 0,
      marginTop: 10
    },
    thirdIcon: {
      marginLeft: 10,
      marginTop: 13
    }
})