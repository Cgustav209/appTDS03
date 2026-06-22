import React, { useState } from "react";
import { View, Text, Image, Alert, Platform,ScrollView, KeyboardAvoidingView } from 'react-native';


//navegation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula3_App";
import { useNavigation } from '@react-navigation/native';
// componentes
import { CustomTextInput } from "../../componentes/CustomTextInput";
import styles from "../../theme/RecuperarSenhaStyles";
import { RoundedButton } from "../../componentes/RoundedButton";

// View
import useViewModel from './ViewModel';


export const RecuperarSenhaScreen = () => {

      // Permite navegar entre as telas da aplicação
       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
       // Pega os dados e funções retornados pelo ViewModel
       const { userEmail, onChange, recuperarSenha } = useViewModel();

return (

    <KeyboardAvoidingView
        behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1 }}
      >

    <View style={styles.container}>
      {/* background com imagem */}
        <Image
           source={require('../../../../assets/img/chef.jpg')}
           style={styles.ImgBg}
         />
        <Text>Recuperar Senha</Text>
       
        <View style={styles.logoContainer}>
            <Image
               source={require('../../../../assets/img/user_image.png')}
               style={styles.logoImg}
             />
            <Text 
               style={styles.logoTxt}>Digite seu email
            </Text>
        </View>
        
          
         <View style={styles.frm}>
          {/*Componente de input, que recebe todos os valores pedidos*/}
           <ScrollView
           contentContainerStyle={{ flexGrow: 1}}
           showsVerticalScrollIndicator={false}
           bounces={false}>
            <CustomTextInput
                      image={require('../../../../assets/img/email.png')}
                      placeholder="Digite seu Email"
                      keyboardType="email-address"
                      value={ userEmail }
                      onChangeText={ onChange }
                      secureTextEntry={false}
                      property="userEmail"
             />
 
         
             
             <View style={{ marginTop: 40 }}>
       
               <RoundedButton
                    text="Enviar Token"
                    onPress={ () => {
                      // salva na lista os dados
                      recuperarSenha();
                      //cria uma mensagem 
                      Alert.alert(
                         //Tirulo
                          'Sucesso',
                          //Mensagem
                          'Token enviado',
                          // lista de botoes
                          [
                            {
                              text: 'OK',
                              onPress: () => navigation.navigate('RedefinirSenhaScreen')
                            }
                          ]
                        );
                      }}   
                />
             </View>
       
            </ScrollView>  
           </View> 
       </View>
       </KeyboardAvoidingView>
      );
     };
       

