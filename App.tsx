import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, Image, Dimensions } from "react-native"
import { CameraView, useCameraPermissions} from "expo-camera";

// Pegamos a largura e altura da tela do disposivo SmarthPhone para garantir o tamanho da foto
const { width, height} = Dimensions.get('window');

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const cameraRef = useRef<any>(null);

    if(!permission){
        return(
            <View style={ styles.container }>
                <Text style= { styles.container }>
                    Carregnado permissões...
                </Text>
            </View>
        );
    }

    if (!permission.granted){
        return(
            <View style={ styles.container}>
                <Text style={ styles.textPermissao }> Precisamos da sua permissao para mostrar a câmera! </Text>
                <Button onPress={requestPermission} title="Conceder Permissão" />
            </View>
        );
    }

    const takePicture = async () => {
        if (cameraRef.current){
            // skiProcessong garante que o Android processe a imagem antes de entregar o URI
            const option = { quality: 0.8, skipProcessing: false}

            const photo = await cameraRef.current.takePictureAsync(option);

            if (photo && photo.uri){
                // Isso vai aparecer no terminal do VsCode
                console.log('Foto tirada com com sucesso! Caminho:', photo.uri)
                setCapturedImage(photo.uri);
            }
        }
    };

   return(
     <View style={ styles.container }>
        {capturedImage ? (
        // tela de preview da foto
        <View style={ styles.previewContainer }>
            <Image
            source={{ uri: capturedImage }}
            style={ styles.preview }
            resizeMode='cover' // Garante que a foto preencha o espaço total do SmartPhone
            />
        <View style={ styles.previewButtons }>
            <Button
                onPress={() => setCapturedImage(null)}
                title="Tirar outra foto!"
            />
        </View>
     </View>
        ) : (
        // Tela da Câmera
        <View style={ styles.cameraContainer }>
            <CameraView style={ styles.camera } facing="back"  ref={cameraRef} />


        <View style={ styles.buttonContainer }>
          <TouchableOpacity style={ styles.button } onPress={takePicture}>
            <Text style={ styles.textBtn }> Tirar Foto </Text>
          </TouchableOpacity>
        </View>
      </View>
    

    )};
    </View>
   );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#000',
    alignContent:'center',
    justifyContent: 'center',
  },
  textPermissao: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
    position: 'relative',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    left:0,
    right:0,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
  textBtn: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  textLight: {
    color: '#fff',
    textAlign: 'center',
  },
  previewContainer: {
    flex: 1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor: '#000',
  },
  preview: {
    // Defini tamanahos fixos baseado na tela do celular
    width: width * 0.85,
    height: height * 0.70,
    borderRadius: 12,
  },
  previewButtons: {
    marginTop:20,
    width: '80%',
    alignContent: 'center',
  },
});