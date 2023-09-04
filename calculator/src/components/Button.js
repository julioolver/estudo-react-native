import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'

const Button = (props) => {
    const stylesButton = [styles.button]

    if (!!props.double) {
        stylesButton.push(styles.buttonDouble)
    }

    if (!!props.triple) {
        stylesButton.push(styles.buttonTriple)
    }
    if (!!props.operation) {
        stylesButton.push(styles.operationButton)
    }

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2, // vai ser duas vezes maior que um comp normal
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3, // vai ser três vezes maior que um comp normal
    }
})

export { Button }