import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#FFF",
      width: "100%",
    },
    caixaImg: {
      height: '30%',
      width: '100%'
    },
    imgAdRem: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-end',
      alignItems: 'flex-start'
    },
    caixaTitPagina: {
      height: 50,
      backgroundColor: '#66AF91',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopRightRadius: 20,
      width: '75%',
      borderWidth: 1,
      borderColor: '#666666'
    },
    titPagina: {
      fontSize: 25,
      color: '#EBF2F2'
    },
    page: {
      height: "65%",
      width: "90%",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#FFF",
      paddingTop: 40,
    },
    titInputs: {
      textAlign: 'left',
      width: '75%',
      color: '#66AF91',
      fontSize: 20,
    },
    inputs: {
      borderWidth: 1,
      borderColor: '#A2CA8E',
      borderBottomWidth: 2,
      borderBottomColor: '#A2CA8E',
      width: "75%",
      textAlign: "left",
      fontSize: 20,
      color: '#A2CA8E',
      backgroundColor: '#FFF',
      borderRadius: 10,
      height: 40,
      paddingLeft: 10
    },
    caixaEd: {
      backgroundColor: '#66AF91',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      borderRadius: 20
    },
    editar: {
      color: '#EBF2F2',
      fontSize: 20
    }
});