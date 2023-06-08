import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import * as Animatable from "react-native-animatable";
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

  const alertaCamposVazios = () => {
    Alert.alert('Campos Vazios', 'Todos os campos devem ser preenchidos', [
      {
        text: 'Ok',
        onPress: () => null
      }
    ])
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.titulo}>
        <TouchableOpacity onPress={() => navigation.navigate("Remedios")}>
          <Ionicons name="arrow-back" size={30} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.textTitulo}>Editar Remédio</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.page}>
        <ScrollView>
          <KeyboardAvoidingView behavior="padding" enabled>
            <Text style={styles.titInputs}>Nome</Text>
            <TextInput
              maxLength={20}
              style={styles.inputs}
              onChangeText={(newText) => setNome(newText)}
              value={nome}
            />
            <Text style={styles.titInputs}>Quantidade da caixa</Text>
            <TextInput
              style={styles.inputs}
              onChangeText={(newText) => setQuantCaixa(newText)}
              value={quantCaixa}
              keyboardType="numeric"
            />
            <Text style={styles.titInputs}>Quantidade por dia</Text>
            <TextInput
              style={styles.inputs}
              onChangeText={(newText) => setQuantDia(newText)}
              value={quantDia}
              keyboardType="numeric"
            />
            <Text style={styles.titInputs}>Quantidade</Text>
            <TextInput
              style={styles.inputs}
              onChangeText={(newText) => setQuantidade(newText)}
              value={quantidade}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.caixaEd}
              onPress={() => {
                if (!nome || !quantCaixa || !quantDia || !quantidade) {
                  alertaCamposVazios();
                } else {
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
                }
              }}
            >
              <Text style={styles.editar}>Editar</Text>
            </TouchableOpacity>
            {editando && <ActivityIndicator size="large" />}
          </KeyboardAvoidingView>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
}