import {Animated, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useRef, useState } from 'react';
import Wrapper from '../components/Wrapper';
import MenuIcon from '../assets/images/menu.png';
import StartGame from '../assets/images/start.png';
import {deviceHeight, deviceWidth} from '../constants/Scaling';
import Dice from '../components/Dice';
import {Colors} from '../constants/Colors';
import Pocket from '../components/Pocket';
import VerticalPath from '../components/path/VerticalPath';
import {Plot2Data, Plot1Data, Plot3Data, Plot4Data} from '../helper/PlotData';
import HorizantalPath from '../components/path/HorizantalPath';
import FourTriangle from '../components/FourTriangle';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native'
import {
  selectDiceTouch,
  selectPlayer1,
  selectPlayer2,
  selectPlayer3,
  selectPlayer4,
} from '../redux/reducers/gameSelector';

const LudoboardScreen = () => {
  const player1 = useSelector(selectPlayer1);
  const player2 = useSelector(selectPlayer2);
  const player3 = useSelector(selectPlayer3);
  const player4 = useSelector(selectPlayer4);
  const isDiceTouch = useSelector(selectDiceTouch);
  const winner = useSelector(state=>state.game.winner);


  const isFocused = useIsFocused();

  const [showStartImage, setShowStartImage] = useState(false)
  const [menuVisible, setmenuVisible] = useState(false)
  const opacity = useRef(new Animated.Value(0)).current





  return (
    <Wrapper>
      <TouchableOpacity style={{position: 'absolute', top: 60, left: 20}}>
        <Image source={MenuIcon} style={{width: 30, height: 30}} />
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.flexRow}>
          <Dice color={Colors.green} />
          <Dice color={Colors.red} rotate />
        </View>

        <View style={styles.ludoboard}>
          <View style={styles.plotContainer}>
            <Pocket color={Colors.green} player={2} />
            <VerticalPath cells={Plot2Data} color={Colors.yellow} />
            <Pocket color={Colors.yellow} player={3} />
          </View>

          <View style={styles.pathContainer}>
            <HorizantalPath cells={Plot1Data} color={Colors.green} />
            <FourTriangle />
            <HorizantalPath cells={Plot3Data} color={Colors.blue} />
          </View>

          <View style={styles.plotContainer}>
            <Pocket color={Colors.red} player={1} />
            <VerticalPath cells={Plot4Data} color={Colors.red} />
            <Pocket color={Colors.blue} player={4} />
          </View>
        </View>

        <View style={styles.flexRow}>
          <Dice color={Colors.blue} />
          <Dice color={Colors.yellow} rotate />
        </View>
      </View>

      {showStartImage && (
        <Animated.Image
          source={StartGame}
          style={{
            width:deviceWidth * 0.5,
            height: deviceHeight *0.2,
            position: 'absolute',
            opacity,
          }}
        />
      )}




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
  pathContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '20%',
    justifyContent: 'space-between',
    backgroundColor: '#1E5162',
  },
  ludoboard: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    padding: 10,
  },
  plotContainer: {
    width: '100%',
    height: '40%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
});
