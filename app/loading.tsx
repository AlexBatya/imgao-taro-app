import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
    
} from 'react-native-reanimated';

export default function Loading(){

    return (
        <View style = {{backgroundColor: '#6E66A1', width: '100vw', height: '100vh', display: 'flex', alignContent: 'center', justifyContent: "center"}}>
            <div style = {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Image source={require('../assets/images/logo.png')} style = {{width: 291, height: 111}}></Image>
                <Text style = {{color: 'white', fontSize: 36, fontWeight: 400, marginLeft: 100}}>ТАРО</Text>
            </div>

            <div style = {{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Image
                style = {{
                    position: 'absolute',
                    bottom: 100,

                    width: 44.47,
                    height: 64,
                }} 
                source={require('../assets/images/card.svg')} ></Image>
            </div>
        </View>
    )
}