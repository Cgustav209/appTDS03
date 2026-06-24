import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import GaleriaScreen  from './src/Presentation/componentes/GaleriaScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Configura a barra de status do topo para combinar com o tema escuro */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      {/* Renderiza a nossa tela de captura de imagem da galeria */}
      <GaleriaScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
