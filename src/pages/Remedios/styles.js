import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
    },
    page: {
      padding: 10,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
    },
    caixaAddRemedio: {
      width: "100%",
      height: 50,
      justifyContent: 'center',
      alignItems: "center",
    },
    btnAdd: {
      padding: 10,
      height: "100%",
      backgroundColor: "#026f6e",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    adicionar: {
      fontSize: 20,
      color: "#FFF",
    },
    flatlist: {
      width: "100%",
    },
    item: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#026f6e',
      backgroundColor: "#FFF",
      width: "100%",
      marginTop: 15,
      marginBottom: 10,
      padding: 10,
      height: 150,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    itemEsquerda: {
      width: "60%",
      height: "100%",
      justifyContent: "space-evenly",
    },
    nomeItem: {
      fontSize: 25,
      color: "#026f6e",
    },
    infoItem: {
      flexDirection: "row",
      width: "100%",
    },
    cadaInfoItem: {
      marginRight: 10,
      fontSize: 15,
      color: "#A2CA8E",
    },
    btnsItem: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    btnExcluir: {
      backgroundColor: "#184848",
      width: "40%",
      height: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 5,
    },
    excluir: {
      fontSize: 15,
      color: "#FFF",
    },
    btnEditar: {
      borderRadius: 5,
      backgroundColor: "#007878",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: 35,
    },
    editar: {
      fontSize: 15,
      color: "#FFF",
    },
    itemDireita: {
      width: "40%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    caixaQuant: {
      backgroundColor: "#a8c030",
      borderRadius: 5,
      width: "75%",
      height: "75%",
      justifyContent: "center",
      alignItems: "center",
    },
    caixaQuantAcab: {
      backgroundColor: "#ea2a15",
      borderRadius: 5,
      width: "75%",
      height: "75%",
      justifyContent: "center",
      alignItems: "center",
    },
    quantidade: {
      fontSize: 40,
      color: "#FFF",
    },
});