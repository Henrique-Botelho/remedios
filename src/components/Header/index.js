import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

function Header() {
  return(
    <Animatable.View animation="fadeInDown" style={styles.header}>
      <Text style={styles.titulo}>Controle de Remédios</Text>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#026f6e",
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 20,
    color: "#FFF"
  }
});

export default Header;