import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { MainContext } from "../../context/mainContext";

export default function Remedios({ navigation }) {
  const { remedios, pegaRemedios, excluirTodosRemedios, excluirUmRemedio, recarregaEstoque } =
    useContext(MainContext);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    pegaRemedios().then(() => {
      setLoad(true);
    });
  }, []);

  const alertaExcluirItem = (nome, idItem) => {
    Alert.alert(
      `Excluir ${nome}?`,
      "Tem certeza que deseja exlcuir esse remédio?",
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            excluirUmRemedio(idItem);
            pegaRemedios();
          },
        },
      ]
    );
  };

  if (load) {
    return (
      <SafeAreaView>
        {remedios.length != 0 ? (
          <FlatList
            data={remedios}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Text>Nome: {item[1].nome}</Text>
                  <Text>Quantidade: {item[1].quantidade}</Text>
                  <Text>Total da caixa: {item[1].quantCaixa}</Text>
                  <Text>Quantidade por dia: {item[1].quantDia}</Text>
                  <TouchableOpacity
                    onPress={() => alertaExcluirItem(item[1].nome, item[0])}
                  >
                    <Image
                      source={require("../../../assets/excluir.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EditaRemedio', item)}
                  >
                    <Image
                      source={require("../../../assets/edit.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      recarregaEstoque(item);
                      pegaRemedios();
                    }}
                  >
                    <Image
                      source={require("../../../assets/reload.png")}
                      style={{ width: 50, height: 50 }}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        ) : (
          <View>
            <Text>Sem remédios</Text>
          </View>
        )}
        <Button
          title="Adicionar"
          onPress={() => navigation.navigate("AdRemedio")}
        />
        <Button
          title="Limpar"
          color="red"
          onPress={() => {
            excluirTodosRemedios();
            pegaRemedios();
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
