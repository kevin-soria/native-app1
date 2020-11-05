import React from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { colors } from '../utils/index'

const { PRIMARY_COLOR } = colors
// picker component
export default function UnitsPicker({ unitsSystem, setUnitsSystem }) {
    return (
        <View style={styles.unitsSystem}>
            <Picker
                selectedValue={unitsSystem}
                onValueChange={(item) => setUnitsSystem(item)}
                mode="dropdown"
                itemStyle={{ fontSize: 12 }}
            >
                <Picker.Item label="C°" value="metric" />
                <Picker.Item label="F°" value="imperial" />
            </Picker>
        </View>
    )
}
const styles = StyleSheet.create({
    unitsSystem: {
        position: 'absolute',
        ...Platform.select({
            ios: {
                top: -30,
            },
            android: {
                top: 30,
            },
        }),

        left: 100,
        height: 150,
        width: 200,
        color: PRIMARY_COLOR,
        // backgroundColor: BCKGD_COLOR,
    },
})
