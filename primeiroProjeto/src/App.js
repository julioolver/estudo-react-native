import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Primeiro from "./components/primeiro";
import Comp, { Comp1, Comp2 } from "./components/Multi";
import MinMax from "./components/MinMax";
import { Alatorio } from "./components/Aleatorio";
import {Mega} from "./components/mega/Mega";

const App = () => {
    const app =
    <SafeAreaView style={style.App}>
        <Mega maxNumbers={60}/>
        {/* <MinMax min="3" max="20"></MinMax>
        <Alatorio min={2} max={60}></Alatorio> */}
       {/* <Comp />
       <Comp1 />
       <Comp2></Comp2>
        <Primeiro /> */}
    </SafeAreaView>

    return app;
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})

export default App