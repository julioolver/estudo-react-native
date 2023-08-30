import React from "react";
import { Text } from "react-native";

const Alatorio = ({ min, max }) => {
    console.warn(Math.random(), 'aaa', (10 - min + 1), Math.floor(Math.random() * (10 - 4 + 1)))
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
    return (
        <Text>{numeroAleatorio}</Text>
    )
}

export { Alatorio }