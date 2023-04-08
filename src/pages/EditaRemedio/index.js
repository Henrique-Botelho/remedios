import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import Footer from "../../components/Footer";
import { styles } from "./styles";

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
    <KeyboardAvoidingView keyboardVerticalOffset={18} style={styles.safeArea} behavior='height'>
      <View style={styles.caixaImg}>
        <ImageBackground style={styles.imgAdRem} source={require('../../../assets/edrem.jpg')}>
          <View style={styles.caixaTitPagina}>
            <Text style={styles.titPagina}>Editar Remédio</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.page}>

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
          <Text style={styles.editar}>Editar</Text>
        </TouchableOpacity>
        {editando && <ActivityIndicator size="large" />}
      </View>
      <Footer />
    </KeyboardAvoidingView>
  );
}