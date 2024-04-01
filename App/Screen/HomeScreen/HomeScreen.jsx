import { View, StyleSheet} from 'react-native'
import React from 'react'
import AppMapView from './AppMapView'
import SearchBar from './SearchBar'

export default function HomeScreen() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <SearchBar/>
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
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
})