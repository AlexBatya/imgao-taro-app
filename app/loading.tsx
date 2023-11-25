import {SafeAreaView, 
    StyleSheet, 
    View, 
    Text, 
    Image, 
    Animated
} from 'react-native';
import React, {useEffect} from 'react';
import { Easing } from 'react-native';

export default function Loading(){

    let rotateValueHolder = new Animated.Value(0)
    const startImageRotateFunction = () => {
        rotateValueHolder.setValue(0);
        Animated.timing(rotateValueHolder, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
            useNativeDriver: false
        }).start(() => startImageRotateFunction())
    }

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <SafeAreaView style = {{}}>
            <View style = {styles.container}>
                <div style = {styles.logoCenter}>
                    <Image source = {require('../assets/images/logo.png')} style = {styles.logo}/>
                    <Text style = {styles.imgText}>ТАРО</Text>
                </div>
                <div style = {styles.imgContainer}>
                    <Animated.Image source = {require('../assets/images/card.svg') } style = {[styles.card, {
                        transform: [{rotate: rotateData}]
                    }]}></Animated.Image>
                </div>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',

        width: 100 + 'vw',
        height: 100 + 'vh',
        backgroundColor: 'rgba(110, 102, 161, 1.00)'
    },
    logo: {
        width: 291,
        height: 111,
    },
    imgText: {
        marginLeft: 100,
        color: "white",
        fontSize: 36,
        fontStyle: "normal",
        fontWeight: "400",
    },
    imgContainer: {
        position: 'relative',
        display: 'flex',
        justifyContent: "center",
    },
    card: {
        position: "absolute",
        bottom: 100,
    },
    logoCenter: {
        width: 100 + "%",
        height: 100 + "%",

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
})