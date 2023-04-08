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
  StyleSheet,
} from "react-native";
import Footer from "../../components/Footer";

import { MainContext } from "../../context/mainContext";

export default function Remedios({ navigation }) {
  const {
    remedios,
    pegaRemedios,
    excluirTodosRemedios,
    excluirUmRemedio,
    recarregaEstoque,
  } = useContext(MainContext);
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.page}>
          <TouchableOpacity
            style={styles.caixaAd}
            onPress={() => navigation.navigate("AdRemedio")}
          >
            <Text style={styles.adicionar}>+</Text>
          </TouchableOpacity>
          {remedios.length != 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlist}
              data={remedios}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.item}>
                    <View style={styles.itemEsquerda}>
                      <Text style={styles.nomeItem}>{item[1].nome}</Text>
                      <View style={styles.infoItem}>
                        <Text style={styles.cadaInfoItem}>
                          Caixa: {item[1].quantCaixa}
                        </Text>
                        <Text style={styles.cadaInfoItem}>
                          Por dia: {item[1].quantDia}
                        </Text>
                      </View>
                      <View style={styles.btnsItem}>
                        <TouchableOpacity
                          style={styles.btnExcluir}
                          onPress={() =>
                            alertaExcluirItem(item[1].nome, item[0])
                          }
                        >
                          <Text style={styles.excluir}>Excluir</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.btnEditar}
                          onPress={() =>
                            navigation.navigate("EditaRemedio", item)
                          }
                        >
                          <Text style={styles.editar}>Editar</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.itemDireita}>
                      <TouchableOpacity
                        style={item[1].quantidade > 5 ? styles.caixaQuant : styles.caixaQuantAcab}
                        onPress={() => {
                          recarregaEstoque(item);
                          pegaRemedios();
                        }}
                      >
                        <Text style={styles.quantidade}>
                          {item[1].quantidade}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            />
          )}
        </View>
        <Footer />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.page}>
          <ActivityIndicator size="large" />
        </View>
        <Footer />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF2F2",
    width: "100%",
  },
  page: {
    height: "95%",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBF2F2",
    paddingTop: 40,
  },
  caixaAd: {
    backgroundColor: "#66AF91",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#666666',
    borderRadius: 10
  },
  adicionar: {
    fontSize: 40,
    textAlign: "center",
    color: "#EBF2F2",
    width: 60,
    height: 60,
  },
  flatlist: {
    width: "100%",
  },
  item: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d9dbdb',
    backgroundColor: "#ffffff",
    width: "100%",
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    height: 150,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemEsquerda: {
    width: "60%",
    height: "100%",
    justifyContent: "space-evenly",
  },
  nomeItem: {
    fontSize: 25,
    color: "#66AF91",
  },
  infoItem: {
    flexDirection: "row",
    width: "100%",
  },
  cadaInfoItem: {
    marginRight: 10,
    fontSize: 15,
    color: "#A2CA8E",
  },
  btnsItem: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnExcluir: {
    backgroundColor: "#a2ca8e",
    width: "40%",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  excluir: {
    fontSize: 15,
    color: "#EBF2F2",
  },
  btnEditar: {
    borderRadius: 20,
    backgroundColor: "#66af91",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 35,
  },
  editar: {
    fontSize: 15,
    color: "#EBF2F2",
  },
  itemDireita: {
    width: "40%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  caixaQuant: {
    backgroundColor: "#abdb25",
    borderRadius: 60,
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  caixaQuantAcab: {
    backgroundColor: "#e6626f",
    borderRadius: 60,
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  quantidade: {
    fontSize: 40,
    color: "#EBF2F2",
  },
});
