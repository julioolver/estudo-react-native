import React, {useState} from 'react';
import {Text, View} from 'react-native';

const Mega = ({qtdNumeros}) => {
  const [numeros, setQtdNumeros] = useState(qtdNumeros +1)
  
  return (
    <View>
      <Text>Gerador de Mega-Sena {numeros}</Text>
    </View>
  );
};
export {Mega};
