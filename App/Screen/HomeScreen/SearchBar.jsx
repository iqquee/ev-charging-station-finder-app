import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
    return (
        <View style={{
            width: "70%"
        }}>
            <GooglePlacesAutocomplete
                placeholder='Search EV Charging station'
                onPress={(data, details = null) => {
                    console.log(data, details);
                }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key: 'YOUR API KEY',
                    language: 'en',
                }}
                styles={{
                }}
            />
        </View>
    )
}