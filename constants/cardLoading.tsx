import 
{
    Animated
} 
from 'react-native';
import React, {useEffect} from 'react';
import { Easing } from 'react-native';

export default function Card(props: any){

    let rotateValueHolder = new Animated.Value(0)

    useEffect(() => {
        const startImageRotateFunction = () => {
            rotateValueHolder.setValue(0);
            Animated.timing(rotateValueHolder, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: false
            }).start(() => startImageRotateFunction())
        }
        startImageRotateFunction();
    }, [])

    const rotateData = rotateValueHolder.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })

    return (
        <Animated.Image source = {require('../assets/images/card.svg') } style = {[props.style, {
            transform: [{rotateY: rotateData}, {rotateZ: '-25deg'}]
        }]}></Animated.Image>
    )
}