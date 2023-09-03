import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Estilo from '../estilo';

const MegaNumero = ({num}) => {
  return (
    <View style={style.COntainer}>
      <Text style={[Estilo.grande, style.Num]}>
        { num }
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  COntainer: {
    backgroundColor: '#000',
    height: 50,
    width: 50,
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center'
  },
  Num: {
    color: '#FFF',
  }
})
export {MegaNumero};
