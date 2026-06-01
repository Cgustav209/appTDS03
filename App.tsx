import React from "react";
import {View, Text, Image, StyleSheet , TextInput, Button, ToastAndroid} from 'react-native';
import { COLORS } from "./src/Presentation/theme/AppTheme";
import { RoundedButton } from "./src/componentes/RoundedButton";



const App = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/bg-smartphone.jpg')} 
      style={ styles.imgBg} 

      />
      <View style={styles.logoContainer}>
        <Image
           source={require('./assets/img/logo.png')}
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
          <View style={ styles.frmInput }>
          <Image
            source={require('./assets/img/user.png')}
            style={ styles.frmIco }
          />
          <TextInput
              placeholder="Digite seu Email / Usuário"
              keyboardType="email-address"
              style={styles.textInput}
            />
          </View>
 
          <View style={styles.frmInput}>
              <Image
              source = { require('./assets/img/password.png')}
              style={ styles.frmIco }
              />
 
            <TextInput
                placeholder="Digite sua Senha"
                keyboardType="default"
                secureTextEntry={true}
                style={ styles.textInput }
            />
        </View>
        <View style={{ marginTop: 30 }}>
          <RoundedButton
            text="Entrar"
          />
        </View>
        <View style= { styles.frmRegister }>
          <Text> Crie sua conta!</Text>
          <Text style={ styles.txtRegister }> Registre-se </Text>
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
  frmInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  frmIco: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 2,
    marginLeft: 15,
  },
  frmRegistre:{
  flexDirection:'row',
  justifyContent: 'center',
  marginTop:15,
},
 
txtRegistre:{
  fontStyle: 'italic',
  fontWeight: 'bold',
  borderBottomColor: COLORS.secondary,
  borderBottomWidth: 1,
  marginLeft: 5,
  color: COLORS.secondary,
},
});

export default App;
