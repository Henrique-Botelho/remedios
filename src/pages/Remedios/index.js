import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, ActivityIndicator, FlatList } from "react-native";

import { MainContext } from "../../context/mainContext";

export default function Remedios({navigation}) {
    const {remedios, pegaRemedios} = useContext(MainContext);
    const [load, setLoad] = useState(false);

    useEffect(() => {
        pegaRemedios()
            .then(() => {
                setLoad(true);
            });
    },[]);

    if (load) {
        return(
            <View>
                {
                    remedios.length != 0 ?
                    <FlatList 
                        data={remedios}
                        renderItem={({item, index}) => {
                            return(
                                <View>
                                    <Text>Nome: {item.nome}</Text>
                                    <Text>Quantidade: {item.quantidade}</Text>
                                </View>
                            )
                        }} />
                    :
                    <View>
                        <Text>Sem remédios</Text>
                    </View>
                }
                <Button title="Adicionar" onPress={() => navigation.navigate('AdRemedio')} />
            </View>
        );
    } else {
        return(
            <View>
                <ActivityIndicator size='large' />
            </View>
        );
    }
}