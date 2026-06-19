import React, { useState, useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button, Image, Dimensions, ActivityIndicator, Alert } from "react-native"
import { CameraView, useCameraPermissions} from "expo-camera";

// Pegamos a largura e altura da tela do disposivo SmarthPhone para garantir o tamanho da foto
const { width, height} = Dimensions.get('window');

// Variavel para controlar o ambiente (true = simula no fronr / false = envia pro servidor real)
const isTestMode = true;

export default function App() {
    const [permission, requestPermission] = useCameraPermissions();
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [isUploading, setUploading] = useState(false);
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

    const uploadImage = async () => {

      if (!capturedImage) return;

      setUploading(true);

      try{
        if (isTestMode){ 
        /**
         * MODO DE TESTE (APENAS FRONT-END)
         */
        console.log('Modo de teste ativo: Simulando o Upload...')
        
        // Simula o tempo de uma requisição de rede "2 segundos"
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Upload simulando com sucesso! A imagem está pronta para ser usada no App.');
        Alert.alert('Sucesso','Sua foto de perfil foi atualizada (Modo teste)!');

        // A partir daqui pode ser utilizada e atualizada a foto na UI, no Context ou Redux

      } else {
        /**
         *  MODO PRODUCAO (COMUNICACAO COM BACKEND)
        */
         // 1. Resolve o erro de "Unsupported FormDataPart" transformando o arquivo local em um Blob padrao da Web
         const localImageResponse = await fetch(capturedImage);
         const blob = await localImageResponse.blob();

         // 2. Cria o FormData e anexa o blob (usando o padrao web que as versões novas do Expo exigem)
         const formData = new FormData();
         formData.append('profilePicture', blob, 'profile.jpg');

         const UPLOAD_URL =  'https://sua-api/upload-endpoint'; // Substitua quando TIVER A 'API'
      
         const response = await fetch(UPLOAD_URL, {
          method: 'POST',
          // DICA: Não coloque 'Content-type : mulpipart/form-data' aqui nos headers
          // O fetch cuida de gerar os 'boundaries' corretamente se você não forcar manualmente.
          headers:{
              // 'Authorization': "Beares SEU_TOKEN_USUARIO' --- Para usuarios autenticados
          },
          body: formData,
         });

         if (response.ok){
           const data = await response.json()

           console.log('Upload concluido no servidor: ', data);
           Alert.alert('Sucesso', 'Sua foto de perfil foi atualizada! - (BackEnd)');
         } else {
            Alert.alert('ERRO', 'Não foi possivel salvar a imagem no servidor.');
         }
      }
    } catch (error){
      console.error('Erro no upload: ', error);
      Alert.alert('ERRO', 'Falha na conexão com o servidor. ' );
    } finally {
      setUploading(false); // Esconde o loading, independente de dar erro sucesso
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
          { isUploading ? (
            <ActivityIndicator size='large' color='#00ff00'/>
          ) : (
            <>
              <Button title="Usar como foto de Perfil" onPress={uploadImage} color='#28a745'/>
              <View style={{ marginTop: 10}}>
                <Button title="Tirar outra foto" onPress={() => setCapturedImage(null)} color='#dc3545' /> 
              </View>
            </>
          )}
        </View>
     </View>
        ) : (
        // Tela da Câmera
        <View style={ styles.cameraContainer }>
            <CameraView style={ styles.camera } facing="front"  ref={cameraRef} />


        <View style={ styles.buttonContainer }>
          <TouchableOpacity style={ styles.button } onPress={takePicture}>
            <Text style={ styles.textBtn }> Tirar Foto </Text>
          </TouchableOpacity>
        </View>
      </View>
    
    )}
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