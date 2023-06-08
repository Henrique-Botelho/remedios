import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

import * as Animatable from "react-native-animatable";

import { MainContext } from "../../context/mainContext";

export default function AdRemedio({ navigation }) {
  const { adicionarRemedio, pegaRemedios } = useContext(MainContext);

  const [nome, setNome] = useState();
  const [quantCaixa, setQuantCaixa] = useState();
  const [quantDia, setQuantDia] = useState();

  const [adicionando, setAdicionando] = useState(false);

  const alertaCamposVazios = () => {
    Alert.alert("Campos Vazios", "Todos os campos devem ser preenchidos", [
      {
        text: "Ok",
        onPress: () => null,
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.titulo}>
        <TouchableOpacity onPress={() => navigation.navigate("Remedios")}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.textTitulo}>Adicionar Remédio</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.page}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <TextInput
              placeholder="Nome"
              maxLength={20}
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
              style={styles.caixaAd}
              onPress={() => {
                if (!nome || !quantCaixa || !quantDia) {
                  alertaCamposVazios();
                } else {
                  setAdicionando(true);
                  adicionarRemedio(nome.trim(), quantCaixa, quantDia).then(
                    () => {
                      pegaRemedios().then(() => {
                        setAdicionando(false);
                        navigation.navigate("Remedios");
                      });
                    }
                  );
                }
              }}
            >
              <Text style={styles.adicionar}>Adicionar</Text>
            </TouchableOpacity>
            {adicionando && <ActivityIndicator size="large" />}
          </KeyboardAvoidingView>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}
