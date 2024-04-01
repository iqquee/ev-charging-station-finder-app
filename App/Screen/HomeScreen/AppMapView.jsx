import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import React from 'react'
import MapViewStyle from "../../Utils/MapViewStyle.json"
export default function AppMapView() {
    return (
        <View>
            <MapView style={styles.map}
            showsUserLocation={true}
            customMapStyle={MapViewStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});