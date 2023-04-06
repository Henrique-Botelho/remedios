import React, { useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MainContext = createContext();

export default function MainProvider({children}) {

    const [remedios, setRemedios] = useState();

    const pegaRemedios = async () => {
        try {
            let chaves = await AsyncStorage.getAllKeys();
            let response = await AsyncStorage.multiGet(chaves);

            let todos = response.map(element => {
                return JSON.parse(element[1]);
            });
                        
        } catch (error) {
            console.log(error);
        }
    }

    const adicionarRemedio = async (nome, quantCaixa, quantDia,) => {
        setRemedios([
            {
                nome: 'novo',
                quantidade: 1
            }
        ]);
    }

    const data = {
        pegaRemedios,
        remedios,
        adicionarRemedio
    }

    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )
}