import React, { useState } from "react";
import { createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MainContext = createContext();

export default function MainProvider({ children }) {
  const [remedios, setRemedios] = useState();

  const pegaRemedios = async () => {
    try {
      let chaves = await AsyncStorage.getAllKeys();
      let response = await AsyncStorage.multiGet(chaves);

      let todos = response.map((element) => {
        let remedio = JSON.parse(element[1]);
        let dataAtual = new Date();
        let dataAntiga = new Date(remedio.data);

        let diff = Math.trunc((dataAtual - dataAntiga) / 1000 / 60 / 60 / 24);

        let desconto = diff * parseInt(remedio.quantDia);

        let novaQuantidade = parseInt(remedio.quantidade) - parseInt(desconto);

        remedio.quantidade = novaQuantidade;
        remedio.data = dataAtual.toISOString();

        AsyncStorage.setItem(element[0], JSON.stringify(remedio));

        return [element[0], remedio];
      });
      setRemedios(todos);
    } catch (error) {
      console.log(error);
    }
  };

  const adicionarRemedio = async (nome, quantCaixa, quantDia) => {
    try {
      let dataAtual = new Date(); // Pego a data atual
      let ISOdata = dataAtual.toISOString(); // Deixo ela no formato ISO

      let novoRemedio = {
        nome,
        quantCaixa,
        quantDia,
        quantidade: parseInt(quantCaixa),
        data: ISOdata,
      };

      await AsyncStorage.setItem(ISOdata, JSON.stringify(novoRemedio));
    } catch (error) {
      console.log(error);
    }
  };

  const editaRemedio = async (
    antigo,
    nome,
    quantCaixa,
    quantDia,
    quantidade
  ) => {
    try {
      let remedio = antigo[1];
      remedio.nome = nome;
      remedio.quantCaixa = quantCaixa;
      remedio.quantDia = quantDia;
      remedio.quantidade = parseInt(quantidade);

      await AsyncStorage.setItem(antigo[0], JSON.stringify(remedio));
    } catch (error) {
      console.log(error);
    }
  };

  const recarregaEstoque = async (item) => {
    try {
      let remedio = item[1];
      remedio.quantidade =
        parseInt(remedio.quantidade) + parseInt(remedio.quantCaixa);

      await AsyncStorage.setItem(item[0], JSON.stringify(remedio));
    } catch (error) {
      console.log(error);
    }
  };

  const excluirUmRemedio = async (idItem) => {
    try {
      await AsyncStorage.removeItem(idItem);
    } catch (error) {
      console.log(error);
    }
  };

  const excluirTodosRemedios = async () => {
    try {
      AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };

  const data = {
    remedios,
    pegaRemedios,
    adicionarRemedio,
    excluirTodosRemedios,
    excluirUmRemedio,
    editaRemedio,
    recarregaEstoque,
  };

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
