import React, { useContext } from "react";
import { View, Text, Button } from "react-native";

import { MainContext } from "../../context/mainContext";

export default function AdRemedio({navigation}) {
    const {adicionarRemedio} = useContext(MainContext);

    return(
        <View>
            <Text>Você está na tela adicionar remedios</Text>
            <Button title="Concluir" onPress={() => adicionarRemedio().then(() => navigation.navigate('Remedios'))} />
        </View>
    );
}