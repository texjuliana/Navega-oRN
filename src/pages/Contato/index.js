import React from 'react';
import {View, Text} from 'react-native';

export default function Contato({route}){
    return(
        <View>
            <Text> Gerente: {route.params.gerente}   </Text>
            <Text> tel: {route.params.tel}   </Text>
            <Text> End: {route.params.end}   </Text>
        </View>

    );
}