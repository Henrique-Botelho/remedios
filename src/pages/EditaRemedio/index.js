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
            <Text style={styles.titPagina}>Editar {route.params[1].nome}</Text>
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

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF2F2",
    width: "100%",
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
    width: '75%'
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
    fontSize: 20,
  },
  inputs: {
    borderBottomWidth: 1,
    borderBottomColor: '#A2CA8E',
    width: "75%",
    textAlign: "left",
    fontSize: 15,
    color: '#A2CA8E',
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 40,
    paddingLeft: 10
  },
  caixaEd: {
    backgroundColor: '#66AF91',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 20
  },
  editar: {
    color: '#EBF2F2',
    fontSize: 20
  }
});
