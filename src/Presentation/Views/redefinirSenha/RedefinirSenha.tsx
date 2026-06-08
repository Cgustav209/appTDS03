import React, {useState} from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';


//navegation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../App";
import { useNavigation } from '@react-navigation/native';
// componentes
import { CustomTextInput } from "../../componentes/CustomTextInput";
import { COLORS } from '../../theme/AppTheme';
import { RoundedButton } from "../../componentes/RoundedButton";

// View
import useViewModel from './ViewModel';

export const RedefinirSenhaScreen = () => {

       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
       const { userEmail, userPassword, userConfirmPassword, userToken, onChange } = useViewModel();

return (
    <View style={styles.container}>
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
                <Text style={styles.logoTxt}>Digite seu email</Text>
              </View>
           <View style={styles.frm}>
                <CustomTextInput
                        image={require('../../../../assets/img/user_menu.png')}
                        placeholder="Digite o token recebido por email"
                        keyboardType="numeric"
                        value={ userToken }
                        onChangeText={ onChange }
                        secureTextEntry={false}
                        property="userToken"
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
                        image={require('../../../../assets/img/password.png')}
                        placeholder="Digite sua nova senha"
                        keyboardType="default"
                        value={ userPassword }
                        onChangeText={ onChange }
                        secureTextEntry={true}
                        property="userPassword"
                      />
                <CustomTextInput
                        image={require('../../../../assets/img/confirm_password.png')}
                        placeholder="Confirme sua nova senha"
                        keyboardType="default"
                        value={ userConfirmPassword }
                        onChangeText={ onChange }
                        secureTextEntry={true}
                        property="userConfirmPassword"
                      />

                <View style={{ marginTop: 40 }}>
       
                   <RoundedButton
                    text="Enviar Token"
                    onPress={ () => {
                      redefinirSenha(); 
                     navigation.navigate('Inicial');
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
