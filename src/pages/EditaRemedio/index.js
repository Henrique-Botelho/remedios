import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { MainContext } from "../../context/mainContext";

export default function EditaRemedio({ navigation, route }) {
  const { pegaRemedios, editaRemedio } = useContext(MainContext);

  const [nome, setNome] = useState(route.params[1].nome);
  const [quantCaixa, setQuantCaixa] = useState(route.params[1].quantCaixa);
  const [quantDia, setQuantDia] = useState(route.params[1].quantDia);
  const [quantidade, setQuantidade] = useState(
    route.params[1].quantidade.toString()
  );

  const [editando, setEditando] = useState();

  return (
    <SafeAreaView style={styles.page}>
      <TextInput
        maxLength={20}
        placeholder="Nome do remédio"
        style={styles.inputs}
        onChangeText={(newText) => setNome(newText)}
        value={nome}
      />
      <TextInput
        placeholder="Quantidade da caixa"
        style={styles.inputs}
        onChangeText={(newText) => setQuantCaixa(newText)}
        value={quantCaixa}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Quantidade por dia"
        style={styles.inputs}
        onChangeText={(newText) => setQuantDia(newText)}
        value={quantDia}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Quantidade"
        style={styles.inputs}
        onChangeText={(newText) => setQuantidade(newText)}
        value={quantidade}
        keyboardType="numeric"
      />

      <TouchableOpacity
        onPress={() => {
          setEditando(true);
          editaRemedio(
            route.params,
            nome.trim(),
            quantCaixa,
            quantDia,
            quantidade
          ).then(() => {
            pegaRemedios().then(() => {
              setEditando(false);
              navigation.navigate("Remedios");
            });
          });
        }}
      >
        <Text>Editar</Text>
      </TouchableOpacity>
      {editando && <ActivityIndicator size="large" />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    borderWidth: 3,
    width: "50%",
    textAlign: "center",
  },
});
