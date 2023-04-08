import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
  KeyboardAvoidingView
} from "react-native";
import Footer from "../../components/Footer";
import { styles } from "./styles";

import { MainContext } from "../../context/mainContext";

export default function AdRemedio({ navigation }) {
  const { adicionarRemedio, pegaRemedios } = useContext(MainContext);

  const [nome, setNome] = useState();
  const [quantCaixa, setQuantCaixa] = useState();
  const [quantDia, setQuantDia] = useState();

  const [adicionando, setAdicionando] = useState(false);

  return (
      <KeyboardAvoidingView keyboardVerticalOffset={5} style={styles.safeArea} behavior='height'>
        <View style={styles.caixaImg}>
          <ImageBackground style={styles.imgAdRem} source={require('../../../assets/adrem.jpg')}>
            <View style={styles.caixaTitPagina}>
              <Text style={styles.titPagina}>Adicionar Remédio</Text>
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
          <TouchableOpacity
            style={styles.caixaAd}
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
            <Text style={styles.adicionar}>Adicionar</Text>
          </TouchableOpacity>
          {adicionando && <ActivityIndicator size="large" />}
        </View>
        <Footer />
      </KeyboardAvoidingView>
  );
}