import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
    },
    page: {
      height: "95%",
      width: "90%",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      paddingTop: 40,
    },
    caixaAd: {
      marginBottom: 20,
      backgroundColor: "#66AF91",
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: '#666666',
      borderRadius: 10
    },
    adicionar: {
      fontSize: 40,
      textAlign: "center",
      color: "#EBF2F2",
      width: 60,
      height: 60,
    },
    flatlist: {
      width: "100%",
    },
    item: {
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#d9dbdb',
      backgroundColor: "#ffffff",
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
      color: "#66AF91",
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
      backgroundColor: "#f5e19c",
      width: "40%",
      height: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 20,
    },
    excluir: {
      fontSize: 15,
      color: "#666666",
    },
    btnEditar: {
      borderRadius: 20,
      backgroundColor: "#efae78",
      justifyContent: "center",
      alignItems: "center",
      width: "50%",
      height: 35,
    },
    editar: {
      fontSize: 15,
      color: "#666666",
    },
    itemDireita: {
      width: "40%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    caixaQuant: {
      backgroundColor: "#abdb25",
      borderRadius: 60,
      width: "90%",
      height: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    caixaQuantAcab: {
      backgroundColor: "#e6626f",
      borderRadius: 60,
      width: "90%",
      height: "90%",
      justifyContent: "center",
      alignItems: "center",
    },
    quantidade: {
      fontSize: 40,
      color: "#EBF2F2",
    },
});