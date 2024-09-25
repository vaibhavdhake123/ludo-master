import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BackgroundImage } from '../helper/GetIcon'

const pile = ({color}) => {

    const pileImage =BackgroundImage.GetImage(color);


  return (
    <TouchableOpacity>

    <View style={styles.hollowCircle}>

    </View>
      <Image source={pileImage} style={{width:32, height:32, position:'absolute',top: -16}}/>
    </TouchableOpacity>
  )
}

export default pile

const styles = StyleSheet.create({
    conatiner:{
        alignItems:"center",
        justifyContent:'center',
        flex:1,
        alignSelf:'center',

    },
    hollowCircle:{
        width:15,
        height:15,
        position:'absolute',
        borderRadius:25,
        borderWidth:2,
        borderColor:'black',
        justifyContent:'center',
        alignItems:'center',
    },
})