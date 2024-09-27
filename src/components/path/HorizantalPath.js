import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import Cell from '../path/Cell';

const HorizantalPath = React.memo(({cells, color}) => {
  const groupedCells = useMemo(() => {
    const group = []
    for (let i = 0; i < cells.length; i += 6) {
      group.push(cells.slice(i, i + 6));
    }
    return group;
  }, [cells]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
        height: '100%',
      }}>
      <View style={{flexDirection: 'column', width: '100%', height: '100%'}}>
        {groupedCells.map((group, groupIndex) => (
          <View
            key={`group=${groupIndex}`}
            style={{flexDirection: 'row', width: '16.7%', height: '33.3%'}}>
            {group.map(id => {
                return(
              <Cell key={`cell-${id}`} id={id} color={color} />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
});

export default HorizantalPath;

const styles = StyleSheet.create({});
