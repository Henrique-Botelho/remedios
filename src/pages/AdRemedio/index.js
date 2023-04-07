import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { MainContext } from "../../context/mainContext";

export default function AdRemedio({ navigation }) {
  const { adicionarRemedio, pegaRemedios } = useContext(MainContext);

  const [nome, setNome] = useState();
  const [quantCaixa, setQuantCaixa] = useState();
  const [quantDia, setQuantDia] = useState();

  const [adicionando, setAdicionando] = useState(false);

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
      <TouchableOpacity
        onPress={() => {
          setAdicionando(true);
          adicionarRemedio(nome.trim(), quantCaixa, quantDia).then(() => {
            pegaRemedios().then(() => {
              setAdicionando(false);
              navigation.navigate("Remedios");
            });
          });
        }}
      >
        <Text>Adicionar</Text>
      </TouchableOpacity>
      {adicionando && <ActivityIndicator size="large" />}
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
