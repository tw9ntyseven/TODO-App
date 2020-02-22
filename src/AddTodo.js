import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {
const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Название не может быть пустым')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
             style={styles.input}
             onChangeText={setValue}
             value={value}
             placeholder="Введите название"
             autoCorrect={false}
             autoCapitalize='none'
              />
            <Button color='#000' style={styles.btn} title='Добавить' onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        padding: 10,
        width: '70%',
        marginLeft: 5,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: 'extra',
    },
})