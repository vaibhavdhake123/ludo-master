import {StyleSheet, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import Cell from './Cell';

const VerticalPath = React.memo(({cells, color}) => {
  const groupedCells = useMemo(() => {
    const group = []
    for (let i = 0; i < cells.length; i += 3) {
      group.push(cells.slice(i, i + 3));
    }
    return group;
  }, [cells]);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%',
        height: '100%',
      }}>
      <View style={{flexDirection: 'column', width: '100%', height: '100%'}}>
        {groupedCells.map((group, groupIndex) => (
          <View
            key={`group=${groupIndex}`}
            style={{flexDirection: 'row', width: '33.3%', height: '16.7%'}}>
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

export default VerticalPath;

const styles = StyleSheet.create({});
