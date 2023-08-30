import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

const Comp = () => {
    return <Text style={estilo.grande}>Comp #Oficial</Text>
}

const Comp1 = () => {
    return <Text style={estilo.grande}>Comp #1</Text>
}

const Comp2 = () => {
    return <Text style={estilo.grande}>Comp #2</Text>
}

export default Comp;
export { Comp1, Comp2}