import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#026f6e",
  },
  titulo: {
    height: 70,
    width: '100%',
    padding: 10,
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: 'row',
  },
  textTitulo: {
    fontSize: 20,
    color: '#FFF'
  },
  page: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFF",
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  inputs: {
    marginVertical: 20,
    width: "100%",
    height: 40,
    fontSize: 20,
    color: "#026f6e",
    textAlign: "left",
    backgroundColor: "#FFF",
    borderBottomWidth: 2,
    borderBottomColor: "#026f6e",
  },
  caixaAd: {
    height: 40,
    width: '100%',
    backgroundColor: "#026f6e",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  adicionar: {
    color: "#FFF",
    fontSize: 20,
  },
});
