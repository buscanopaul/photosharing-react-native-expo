import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../../assets/themes/index'

const Seperator = () => {
    return (
        <View style={styles.seperator} />
    )
}

const styles = StyleSheet.create({
    seperator: {
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        height: 1,
        backgroundColor: theme.colors.gray  
    }
})

export default Seperator
