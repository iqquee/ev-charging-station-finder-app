import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from "./../../Utils/Colors"
import { useWarmUpBrowser } from "../../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
    const onPress = async()=> {
        try {
            const { createdSessionId, signIn, signUp, setActive } =
                await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
              // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    }

    return (
        <View>
            {/* <Image 
                source={require("./../../../assets/images/logo2.png")}
                style={styles.logoImage}
            /> */}

            <Image 
                source={require("./../../../assets/images/ev-image3.png")}
                style={styles.bgImage}
            />

            <View style={{padding:20}}>
                <Text style={styles.heading}>Your ultimate EV charging Station finder App</Text>
                <Text style={styles.headingSub}>Find EV station near you, plan a trip and so much more with just one click... </Text>

                <TouchableOpacity 
                    style={styles.googleLoginButton}
                    onPress={onPress}
                >
                    <Text style={{
                        textAlign: "center",
                        color: Colors.WHITE,
                        fontFamily: "outfit",
                        fontSize: 17
                    }}>
                        Login with Google
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    logoImage: {
        width: "100%",
        height: 80,
        objectFit: "contain",
        marginTop: 90,
    },

    bgImage: {
        marginTop: 90, 
        width: "100%",
        height: 220,
        objectFit: "cover"
    },
    heading: {
        fontFamily: "outfit-bold",
        fontSize: 30,
        marginTop: 15,
        textAlign: "center"
    },
    headingSub: {
        fontFamily: "outfit",
        fontSize: 17,
        textAlign: "center",
        marginTop: 10,
        color: Colors.GRAY,
    },
    googleLoginButton: {
        backgroundColor: Colors.PRIMARY,
        borderRadius: 50,
        padding: 16,
        marginTop: 200,
    }
})