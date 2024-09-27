import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../constants/Colors';
import LottieView from 'lottie-react-native';
import Firework from '../assets/animation/firework.json';
import {Polygon, Svg} from 'react-native-svg';

const FourTriangle = () => {
  const size = 300;
  const [blast, setBlast] = useState(false);
  return (
    <View style={styles.mainContainer}>
      {blast && (
        <LottieView
          source={Firework}
          autoPlay
          loop
          hardwareAccelerationAndroid
          speed={1}
          style={styles.lottieView}
        />
      )}

      <Svg height={size} width={size - 5}>
        <Polygon
          points={`0,0 ${size /2}, ${size /2} ${size},0`}
          fill={Colors.yellow} 
        />
        <Polygon
          points={`${size}, 0 ${size}, ${size} ${size /2 }, ${size /2}`}
          fill={Colors.blue}
        />
        <Polygon
          points={`0, ${size} ${size / 2 }, ${size /2 } ${size}, ${size}`}
          fill={Colors.red}
        />
        <Polygon
          points={`0, 0 ${size / 2}, ${size / 2} 0, ${size}`}
          fill={Colors.green}
        />
      </Svg>
    </View>
  );
};

export default FourTriangle;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.8,
    width: '20%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'white',
    borderColor: Colors.borderColor,
  },
  lottieView: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1,
  },
});
