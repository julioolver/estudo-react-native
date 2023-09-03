import React, {useState} from 'react';
import {Button, Text, TextInput, View, StyleSheet} from 'react-native';
import { MegaNumero } from './Numero';

const Mega = ({maxNumbers}) => {
  const [qtdNumeros, setQtdNumeros] = useState(3);
  const [numeros, setNumeros] = useState([]);

  const gerarNumeros = () => {
    const numeros = Array(qtdNumeros)
      .fill()
      .reduce(arrAcumulator => [...arrAcumulator, geraNovoNumero(arrAcumulator)], []).sort((a, b) => a - b);

    setNumeros(numeros);
  };

  const gerarNumeros2 = () => {
    const numeros = []

    for (let index = 0; index < qtdNumeros; index++) {
      numeros.push(geraNovoNumero(numeros))  
    }

    setNumeros(numeros);
  };

  const geraNovoNumero = arrAcumulator => {
    const number = parseInt(Math.random() * 60) + 1;
   
    return arrAcumulator.includes(number) ? geraNovoNumero(arrAcumulator) : number;
  };
  
  const exibirNumeros = () => {
    return numeros.map( num => {
      return <MegaNumero num={num} />
    })
  }

  return (
    <View>
      <Text>
        Gerador de Mega-Sena {qtdNumeros} {typeof qtdNumeros}
      </Text>
      <TextInput
        keyboardType="numeric"
        style={{borderBottomWidth: 2}}
        placeholder="Qtd numeros"
        value={`${qtdNumeros}`}
        onChangeText={value => setQtdNumeros(+value)}
      />
      <Button title="Gerar" onPress={gerarNumeros} />
      <View style={style.Container}>
        {exibirNumeros()}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  }
})
export {Mega};
