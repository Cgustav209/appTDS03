import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Presentation/Views/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { RegisterScreen } from "./src/Presentation/Views/register/Register";
import { RecuperarSenhaScreen } from "./src/Presentation/Views/recuperarSenha/RecuperarSenha";
import { RedefinirSenhaScreen } from "./src/Presentation/Views/redefinirSenha/RedefinirSenha";

 
export type RootStackParamList = {
  HomeScreen: undefined, // Uma array usa " , "
  RegisterScreen: undefined,
  RecuperarSenhaScreen: undefined,
  RedefinirSenhaScreen: undefined,
}
 
const Stack = createNativeStackNavigator();
 
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{
        headerShown: false
       
        }}>
           <Stack.Screen
                name="HomeScreen" component={HomeScreen}
            />
            <Stack.Screen
            //name = nome da rota,      component = rota
                name="RegisterScreen" component={RegisterScreen}
                // configuracoes da tela
                options={{ 
                  // mostrar cabecario
                  headerShown : true ,  
                  // Define o título exibido no cabeçalho
                  title: "Novo Usuario" 
                }}
            />
              <Stack.Screen
                name="RecuperarSenhaScreen" component={RecuperarSenhaScreen}
                options={{ headerShown : true ,  title: "Recuperar Senha" }}
            />
            <Stack.Screen
                name="RedefinirSenhaScreen" component={RedefinirSenhaScreen}
                options={{ headerShown : true ,  title: "Redefinir Senha" }}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
     
export default App;