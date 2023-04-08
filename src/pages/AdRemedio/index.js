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

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF2F2",
    width: "100%",
    height: '100%'
  },
  caixaImg: {
    height: '30%',
    width: '100%'
  },
  imgAdRem: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  caixaTitPagina: {
    height: 50,
    backgroundColor: '#ADE0DB',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    width: '75%',
    borderWidth: 1,
    borderColor: '#666666'
  },
  titPagina: {
    fontSize: 25,
    color: '#66AF91'
  },
  page: {
    height: "65%",
    width: "90%",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#EBF2F2",
    paddingTop: 40,
  },
  titInputs: {
    textAlign: 'left',
    width: '75%',
    color: '#66AF91',
    fontSize: 20
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: '#A2CA8E',
    width: "75%",
    textAlign: "left",
    fontSize: 20,
    color: '#66AF91',
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 40,
    paddingLeft: 10
  },
  caixaAd: {
    backgroundColor: '#66AF91',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 20
  },
  adicionar: {
    color: '#EBF2F2',
    fontSize: 20
  }
});
