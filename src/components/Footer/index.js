import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return(
        <View style={styles.caixa}>
            <Text style={styles.texto}>Uma produção de Henrique Botelho | 2023</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    caixa: {
        height: '5%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebf2f2',
        minHeight: 35
    },
    texto: {
        color: '#66af91'
    }
});