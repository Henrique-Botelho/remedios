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
        backgroundColor: '#ADE0DB',
        borderTopWidth: 1,
        borderTopColor: '#666666'
    },
    texto: {
        color: '#66AF91'
    }
});