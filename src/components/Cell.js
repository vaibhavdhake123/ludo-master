import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import {Colors} from '../constants/Colors';
import Pile from './pile';
import {RFValue} from 'react-native-responsive-fontsize';
import {ArrowSpot, SafeSpots, StartSpots} from '../helper/PlotData';
import {ArrowRightIcon, StarIcon} from 'react-native-heroicons/outline';

const Cell = ({color, id}) => {
  const isSafeSpot = useMemo(() => SafeSpots.includes(id), [id]);
  const isStartSpot = useMemo(() => StartSpots.includes(id), [id]);
  const isArrowSpot = useMemo(() => ArrowSpot.includes(id), [id]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isSafeSpot ? color : 'white',
        },
      ]}>
      {isStartSpot && <StarIcon size={20} color="grey" />}

      {isArrowSpot && (
        <ArrowRightIcon
          style={{
            color :'black',
            transform: [
              {
                rotate:
                  id === 38
                    ? '180deg'
                    : id == 25
                    ? '90deg'
                    : id == 51
                    ? '-90deg'
                    : '0deg',
              },
            ],
          }}
          size={RFValue(12)}
        />
      )}

      {/* <Pile
        cell={true}
        player={2}
        onPress={()=>{}}
        piceId={2}
        color={Colors.green}

      /> */}
      {/* <Text>{id}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.4,
    borderColor: Colors.borderColor,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  piceContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 99,
  },
});

export default React.memo(Cell);
