import React, {useState} from "react";
import { View, Text, Image, Platform, Alert, ToastAndroid , ScrollView, KeyboardAvoidingView} from 'react-native';


import { RoundedButton } from "../../componentes/RoundedButton";
import { CustomTextInput } from "../../componentes/CustomTextInput";
import styles from "../../theme/RegisterStyles";

import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula3_App";
import { useNavigation } from '@react-navigation/native';



import useViewModel from './ViewModel';
 
export const RegisterScreen = () => {

       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
       const { userEmail, userPassword, userName, userNameuse, userPhone, userConfirmPassword, onChange, register } = useViewModel();

       const testOS = () => {
        if (Platform.OS === 'android') {
          // Android usa o ToastAndroid para exibir mensagens
          ToastAndroid.show('Teste de Cadastro! - Android', ToastAndroid.SHORT);
        } else if (Platform.OS === 'web') {
          // Navegador usa o alert do JS classico
          alert('Teste de Cadastro! - Web');
        } else {
          // Outros sistemas operacionais podem usar o alert como fallback
         Alert.alert('Aviso!','Teste de login! - Iphone');
        }
      };
     
    return (

       <KeyboardAvoidingView
            behavior={ Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1 }}
          >

        <View style={styles.container}>
            <Image
                    source={require('../../../../assets/img/chef.jpg')}
                    style={styles.ImgBg}
                  />
            <Text>Registro de Usuário</Text>
       
        <View style={styles.logoContainer}>
                <Image
                  source={require('../../../../assets/img/user_image.png')}
                  style={styles.logoImg}
                />
                <Text style={styles.logoTxt}>Selecione uma imagem</Text>
              </View>
           <View style={styles.frm}>
             <ScrollView 
                      contentContainerStyle={{ flexGrow: 1}}
                      showsVerticalScrollIndicator={false}
                      bounces={false}>
                      
              <CustomTextInput
                      image={require('../../../../assets/img/user.png')}
                      placeholder="Digite seu nome"
                      keyboardType="default"
                      value={ userName }
                      onChangeText={ onChange }
                      secureTextEntry={false}
                      property="userName"
                    />
 
              <CustomTextInput
                image={require('../../../../assets/img/my_user.png')}
                placeholder="Digite seu nome de usuário"
                keyboardType="default"
                value={ userNameuse }
                onChangeText={ onChange }
                secureTextEntry={false}
                property="userNameuse"                                
              />

              <CustomTextInput
                image={require('../../../../assets/img/email.png')}
                placeholder="Digite seu Email"
                keyboardType="email-address"
                value={ userEmail }
                onChangeText={ onChange }
                secureTextEntry={false}
                property="userEmail"                                
              />

              <CustomTextInput
                image={require('../../../../assets/img/phone.png')}
                placeholder="Digite seu Telefone"
                keyboardType="phone-pad"
                value={ userPhone }
                onChangeText={ onChange }
                secureTextEntry={false}
                property="userPhone"
              />

              <CustomTextInput
                image={require('../../../../assets/img/password.png')}
                placeholder="Digite sua Senha"
                keyboardType="default"
                value={ userPassword }
                onChangeText={ onChange }
                secureTextEntry={true}
                property="userPassword"
              />
              <CustomTextInput
                image={require('../../../../assets/img/confirm_password.png')}
                placeholder="Confirme a Senha"
                keyboardType="default"
                value={ userConfirmPassword }
                onChangeText={ onChange }
                secureTextEntry={true}
                property="userConfirmPassword"
              />
         
             
                <View style={{ marginTop: 40 }}>
       
                  <RoundedButton
                    text="Cadastrar"
                    onPress={ () => {
                      register();
                      navigation.navigate('HomeScreen')
                    }}
                    />
                </View>
                    
                    
                </ScrollView>
               
              </View>
            </View>
            </KeyboardAvoidingView>
          );
        };
       
