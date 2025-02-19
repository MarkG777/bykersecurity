import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* Carga la imagen desde la carpeta assets/images */}
      <Image source={require('@/assets/images/logo.png')} style={styles.image} />
    </View>
  );
}

// Estilos para la splash screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Fondo blanco mientras se carga
  },
  image: {
    width: 250,  // Ajusta el tamaño según necesites
    height: 250,
    resizeMode: "contain",
  },
});
