import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';
import React, { useContext } from 'react'
import MapViewStyle from "../../Utils/MapViewStyle.json"
import { UserLocationContext } from '../../Context/UserLocationContext';
export default function AppMapView() {
    const {location, setLocation} = useContext(UserLocationContext)

    return location?.latitude && (
        <View>
            <MapView style={styles.map}
            showsUserLocation={true}
            customMapStyle={MapViewStyle}
            region={{
                latitude: location?.latitude,
                longitude: location?.longitude,
                latitudeDelta: 0.422,
                longitudeDelta: 0.421,
            }}
            >
                <Marker 
                    coordinate={{
                        latitude: location?.latitude,
                        longitude: location?.longitude,
                    }}
                >
                    <Image source={require("../../../assets/images/car-marker3.png")} 
                    style={{
                        width: 50,
                        height: 50,
                        objectFit: "contain"
                    }}/>
                </Marker>
            </MapView>
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