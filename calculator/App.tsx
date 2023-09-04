/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import {Button} from './src/components/Button';
import {Display} from './src/components/Display';

type operations = '+' | '-' | '*' | '/' | '=' | null;
type valuesOfOperation = [number, number];
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  currentOperation: null as operations,
  valuesOperation: [0, 0] as valuesOfOperation,
  current: 0,
};

function App(): JSX.Element {
  const state = {...initialState};

  const [displayValue, setDisplayValue] = useState<string>(state.displayValue);
  const [clearDisplay, setClearDisplay] = useState<boolean>(state.clearDisplay);
  const [currentOperation, setOperationState] = useState<operations>(
    state.currentOperation,
  );
  const [valuesOperation, setValuesOperation] = useState<number[]>(
    state.valuesOperation,
  );
  const [current, setcurrent] = useState<number>(state.current);

  const resetToInitialState = (): void => {
    setDisplayValue(state.displayValue);
    setClearDisplay(state.clearDisplay);
    setOperationState(state.currentOperation);
    setValuesOperation(state.valuesOperation);
    setcurrent(state.current);
  };

  const addDigit = (n: string): void => {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }

    const clearDisplayCalc = displayValue === '0' || clearDisplay;

    const currentValue = clearDisplayCalc ? '' : displayValue;
    const displayValueActualy = currentValue + n;

    setDisplayValue(displayValueActualy);
    setClearDisplay(false);

    if (n !== '.') {
      const newValue = parseFloat(displayValue);
      const values = [...valuesOperation];
      values[current] = newValue;

      setValuesOperation(values);
    }
  };

  const clearMemory = (): void => {
    resetToInitialState();
  };

  const setOperation = (operation: operations) => {
    if (current === 0) {
      setOperationState(operation);
      setcurrent(1);
      setClearDisplay(true);

      return;
    }

    const equals = operation === '=';
    const values = [...valuesOperation];

    try {
      values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
      setcurrent(0);
    } catch (error) {
      values[0] = valuesOperation[0]
    }
    values[1] = 0

    setDisplayValue(`${values[0]}`)

    setOperation(equals ? null : operation)
  };

  return (
    <SafeAreaView style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label="AC" triple onClick={clearMemory} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={addDigit} />
        <Button label="8" onClick={addDigit} />
        <Button label="9" onClick={addDigit} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={addDigit} />
        <Button label="5" onClick={addDigit} />
        <Button label="6" onClick={addDigit} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={addDigit} />
        <Button label="2" onClick={addDigit} />
        <Button label="3" onClick={addDigit} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={addDigit} />
        <Button label="." onClick={addDigit} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
  },
});

export default App;
