import { View, StyleSheet} from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import Header from './Header'

export default function HomeScreen() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <AppMapView />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        position: "absolute",
        zIndex: 1,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        paddingHorizontal: 20,
    }
})