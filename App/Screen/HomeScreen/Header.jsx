import { View, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'

export default function Header() {
    const {user} = useUser()
    return (
        // uri:user?.imageUrl
        <View >
            <Image source={{uri:user?.imageUrl}} 
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 50,
                    objectFit: "contain",
                }}
            />
        </View>
    )
}