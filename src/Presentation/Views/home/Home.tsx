import React, { useState } from 'react';
import {View, Text, Image, TextInput, ToastAndroid, Platform, Alert, TouchableOpacity, ScrollView, KeyboardAvoidingView} from 'react-native';
// importacao dos elementos de navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../Aula3_App';

//Componentes
import styles from '../../theme/HomeStyles';
import { RoundedButton } from "../../componentes/RoundedButton";
import { CustomTextInput } from '../../componentes/CustomTextInput';

// View

import useViewModel from './ViewModel';


export const HomeScreen = () => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const { userEmail, userPassword, onChange, login } = useViewModel();

  const testOS = () => {
    if (Platform.OS === 'android') {
      // Android usa o ToastAndroid para exibir mensagens
      ToastAndroid.show('Teste de login! - Android', ToastAndroid.SHORT);
    } else if (Platform.OS === 'web') {
      // Navegador usa o alert do JS classico
      alert('Teste de login! - Web');
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
      source={require('../../../../assets/bg-smartphone.jpg')} 
      style={ styles.imgBg} 

      />
      <View style={styles.logoContainer}>
        <Image
           source={require('../../../../assets/img/logo.png')}
           style= { styles.logoImg }
        />
       <Text style={styles.logoTxt}>
        Restaurante | Pizzaria Palermo 
       </Text>
      </View>
    
      <View style={ styles.frm }>
         <Text style= {styles.frmTitle}>
             Entrar
           </Text>
        <ScrollView 
          contentContainerStyle={{ flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          bounces={false}>
          


       
          <CustomTextInput
            image={require('../../../../assets/img/user.png')} 
            placeholder="Digite seu Email / Usuário"
            keyboardType="email-address" 
            secureTextEntry={false}
            property='userEmail'
            onChangeText={ onChange }
            value={ userEmail }
           />
          <CustomTextInput
            image={require('../../../../assets/img/password.png')} 
            placeholder="Digite sua Senha" 
            keyboardType="default" 
            secureTextEntry={true}
            property='userPassword'
            onChangeText={ onChange }
            value={ userPassword }
           />
            <TouchableOpacity 
            onPress={() => navigation.navigate('RecuperarSenhaScreen')}>
            <Text style={ styles.txtRecover}> Esqueci-Senha  </Text>
          </TouchableOpacity>
        


        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Entrar"
            onPress={() => {
              login();
            }}
          />
        </View>
        <View style= { styles.frmRegister }>
          <Text> Crie sua conta!</Text>

          <TouchableOpacity 
          onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={ styles.txtRegister}> Registre-se </Text>
          </TouchableOpacity>
        </View> 


      </ScrollView>

      </View>
    </View>
    </KeyboardAvoidingView>
  );

};



// export default HomeScreen;
