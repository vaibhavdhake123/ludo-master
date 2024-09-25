import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Wrapper from '../components/Wrapper';
import MenuIcon from '../assets/images/menu.png';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import Dice from '../components/Dice';
import {Colors} from '../constants/Colors';
import Pocket from '../components/Pocket';

const LudoboardScreen = () => {
  return (
    <Wrapper>
      <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
        <Image source={MenuIcon} style={{width: 30, height: 30}} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Dice color={Colors.yellow} />
          <Dice color={Colors.green} rotate />
        </View>

        <View style={styles.ludoboard}>
          <View style={styles.plotContainer}>
          <Pocket color={Colors.yellow} player={2}/>
          </View>
        </View>

        <View style={styles.flexRow}>
          <Dice color={Colors.blue} />
          <Dice color={Colors.red} rotate />
        </View>
      </View>
    </Wrapper>
  );
};

export default LudoboardScreen;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: deviceHeight * 0.5,
    width: deviceWidth,
  },
  flexRow: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 30,
  },
  ludoboard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'red',
  },
  plotContainer:{
    width : '100%',
    height:'40%',
    justifyContent :'space-between',
    flexDirection: 'row',
    backgroundColor:'#ccc',
  }
});
