import React, {useState} from "react";
import { View, Text, Image,Platform, ScrollView, KeyboardAvoidingView} from 'react-native';


//navegation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../Aula3_App";
import { useNavigation } from '@react-navigation/native';
// componentes
import { CustomTextInput } from "../../componentes/CustomTextInput";
import styles from "../../theme/RedefinirSenhaStyles";
import { RoundedButton } from "../../componentes/RoundedButton";

// View
import useViewModel from './ViewModel';

export const RedefinirSenhaScreen = () => {

       const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
       const { userEmail, userPassword, userConfirmPassword, userToken, onChange, redefinirSenha } = useViewModel();

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
            <Text>Recuperar Senha</Text>
       
        <View style={styles.logoContainer}>
                <Image
                  source={require('../../../../assets/img/user_image.png')}
                  style={styles.logoImg}
                />
                <Text style={styles.logoTxt}>Digite seu Token</Text>
        </View>
             

              <View style={styles.frm}>

                <ScrollView 
                  contentContainerStyle={{ flexGrow: 1}}
                  showsVerticalScrollIndicator={false}
                  bounces={false}>  

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
                        text="Concluir"
                        onPress={ () => {
                        redefinirSenha(); 
                        navigation.navigate('HomeScreen');
                        }}
                        />

                    </View>
          
                  </ScrollView>  
          
                  
                </View>
        
          </View>
            </KeyboardAvoidingView>
          );
        };
       
