import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Alert } from 'react-native';


//navegation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula3_App";
import { useNavigation } from '@react-navigation/native';
// componentes
import { CustomTextInput } from "../../componentes/CustomTextInput";
import { COLORS } from '../../theme/AppTheme';
import { RoundedButton } from "../../componentes/RoundedButton";

// View
import useViewModel from './ViewModel';


export const RecuperarSenhaScreen = () => {

      // Permite navegar entre as telas da aplicação
       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
       // Pega os dados e funções retornados pelo ViewModel
       const { userEmail, onChange, recuperarSenha } = useViewModel();

return (
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
           
           </View>
       </View>
      );
     };
       
  const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: COLORS.bgBlack,
    alignItems: 'center',
    justifyContent:'center',
 
 
  },
 
  logoContainer:{
    position: 'absolute',
    alignItems: 'center',
    top: '5%',
  },
 
  logoImg:{
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
 
  ImgBg:{
   opacity: 0.8,
    width: '100%',
    height: '100%',
    bottom: '28%',
  },
 
  logoTxt:{
    color: COLORS.bgColor,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 26,
  },
 
  frm:{
    width: '100%',
    height: '75%',
    backgroundColor: COLORS.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  frmTitle:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  frmInput:{
      flexDirection: 'row',
      marginTop: 30,
     
  },
 
  frmIco:{
  width: 25,
  height: 25,
},
});
