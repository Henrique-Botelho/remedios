import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import { MainContext } from "../../context/mainContext";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

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

  const alertaAtualizarRemedio = (item) => {
    Alert.alert(
      "Recarregar remédio?",
      `Abastecer ${item[1].nome} com ${item[1].quantCaixa} unidades?`,
      [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            recarregaEstoque(item);
            pegaRemedios();
          },
        },
      ]
    );
  };

  if (load) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Header />
        <View style={styles.page}>
          <Animatable.View animation="fadeInDownBig" delay={500} style={styles.caixaAddRemedio}>
            <TouchableOpacity
              style={styles.btnAdd}
              onPress={() => navigation.navigate("AdRemedio")}
            >
              <Text style={styles.adicionar}>
                <AntDesign name="plus" size={24} color="#FFF" />
                Adicionar Remédio
              </Text>
            </TouchableOpacity>
          </Animatable.View>
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
                        style={
                          item[1].quantidade > 5
                            ? styles.caixaQuant
                            : styles.caixaQuantAcab
                        }
                        onPress={() => {
                          alertaAtualizarRemedio(item);
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
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.page}>
          <ActivityIndicator size="large" />
        </View>
      </SafeAreaView>
    );
  }
}
