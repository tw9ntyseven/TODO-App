import React from 'react'
import { View, StyleSheet, Text, Button, TouchableOpacity } from 'react-native'


export const Todo = ({ todo, onRemove }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={() => console.log('pressed', todo.id)}
        onLongPress={onRemove.bind(null, todo.id)}
        >
        <View style={styles.todo}>
            <Text>{todo.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
})