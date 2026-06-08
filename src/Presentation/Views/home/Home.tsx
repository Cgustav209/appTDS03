import React, { useState } from 'react';
import {View, Text, Image, StyleSheet , TextInput, ToastAndroid, Platform, Alert, TouchableOpacity} from 'react-native';
// importacao dos elementos de navegação
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';

//Componentes
import { COLORS } from "./../../theme/AppTheme";
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
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '15%',
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  imgBg: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
    bottom: '30%',
  },

  logoTxt:{
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBlockColor: COLORS.bgBlack,
    marginTop: 15,
    fontSize: 20,
  },
  frm: {
    width: '100%',
    height: '40%',
    backgroundColor: COLORS.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,  
  },
  frmTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  frmRegister:{
  flexDirection:'row',
  justifyContent: 'center',
  marginTop:15,
},
 
txtRegister:{
  fontStyle: 'italic',
  fontWeight: 'bold',
  borderBottomColor: COLORS.secondary,
  borderBottomWidth: 1,
  marginLeft: 5,
  color: COLORS.secondary,
},
txtRecover:{
  fontStyle: 'italic',
  fontWeight: 'bold',
  borderBottomColor: COLORS.secondary,
  left: '70%',
  color: COLORS.secondary,
},
});

// export default HomeScreen;
