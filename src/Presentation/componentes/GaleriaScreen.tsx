import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert,Dimensions, ToastAndroid, Platform } from 'react-native';
import *  as ImagePicker from 'expo-image-picker';

const { width, height} = Dimensions.get('window');

export default function GaleriaScreen (){
   // Estado local e isolado para armazenar o caminho da imagem escolhida
   const [selectedImage, setSelectedImage ] = useState<string | null>(null);

   //Funcao independente para acessar a galeria de fotos do dispositivo (Smartphone ou Tablets)
   const abrirGaleria = async () => {
    //Solicitar a permissão de acesso à biblioteca de midia do dispositivo
        const dadosPermissao = await ImagePicker.requestMediaLibraryPermissionsAsync();

        // Se p usuario recusar a permissao , xibe um alerta e interrompe a funcao
        if (!dadosPermissao.granted){
        if(Platform.OS === 'android'){
            ToastAndroid.show("Aviso!: Permissão da galeria negada!", ToastAndroid.LONG); // LONG = serve para duracao da mensagem
        } else {
            Alert.alert("Aviso!","Precisamos de acesso as suas fotos para continuar")
        }
        return;
   }

    // Abre a interface nativa da galeria de fotos do dispositivo
    const resultado = await ImagePicker.launchImageLibraryAsync({
        // Filtra para listar apenas arquivos de imagens 'ignora vídeos'
        mediaTypes: ['images'],

        // Habilita as ferramentas nativas para o usuário cortar/girar a foto
        allowsEditing: true,

        // Define a proporção do corte 'ex: 3x4 ou 1x1 para o quadrado'
        aspect: [4, 3],

        // Mantém a qualidade máxima da imagem selecionada 'escala de 0 a 1'
        quality: 1,
    });
    // Verifica se o usuário de fato escolheu uma foto ou se apenas cancelou/voltou
    if (!resultado.canceled && resultado.assets[0].uri) {

    // Guarda o caminho local 'URI' da foto no estado para renderizá-la na tela
    setSelectedImage(resultado.assets[0].uri);

    console.log(
        "Caminho local da imagem carregado com sucesso:",
        resultado.assets[0].uri ); 
   }
 }; 

return (
  <View style={styles.container}>
    <Text style={styles.title}>Módulo de Galeria Independente</Text>
    <Text style={styles.subTitle}>Acesso ao sistema nativo de arquivos</Text>

    {/* Box de Preview da Imagem */}
    <View style={styles.previewBox}>
      {selectedImage ? (
        <Image
          source={{ uri: selectedImage }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : (
        <Text style={styles.textPlaceholder}>
          Nenhuma imagem selecionada da galeria ainda.
        </Text>
      )}
    </View>

    {/* Botão Interativo para abrir as fotos */}
      <TouchableOpacity
        onPress={abrirGaleria}
        style={ styles.btnGaleria}>
        <Text style={styles.textBtn}>Acessar Pasta de Imagens</Text>
</TouchableOpacity>

{/* Botão para limpar a seleção atual */}
{selectedImage && (
  <TouchableOpacity
        onPress={() => setSelectedImage(null)}
        style={[styles.btnLimpar, { backgroundColor: "#f00", marginTop: 12 }]}
    >
        <Text style={styles.textBtn}>Limpar Imagem</Text>
    </TouchableOpacity>
    )}
  </View>
);
}

const styles = StyleSheet.create({
  
  container: {
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center',
    },
    
    subTitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 30,
        textAlign: 'center',
    },

    previewBox: {
        width: width * 0.85,
        height: height * 0.45,
        backgroundColor: '#1e1e1e',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#333',
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: 30,
    },

    image: {
        width: '100%',
        height: '100%',
    },

    textPlaceholder: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 20,
    },

    btnGaleria: {
        backgroundColor: '#e67e22',
        width: width * 0.85,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textBtn: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    btnLimpar: {
        backgroundColor: '#e67e22',
        width: width * 0.85,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }

})