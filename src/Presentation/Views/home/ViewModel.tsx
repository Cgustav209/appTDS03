import React, { useState } from "react";

const HomeViewModel = () => {

// Guarda o email e a senha digitados pelo usuário
// values = dados atuais | setValues = função para atualizar os dados
    const [values, setValues] = useState({
        userEmail: '',
        userPassword: '',
    });

    // Altera o valor de um campo sem apagar os outros
    const onChange = (property: string, value: any) => {
        setValues({
            ...values,          // mantém os valores atuais
            [property]: value   // altera apenas o campo informado
        });
    }

    // Exibe os dados atuais no console
    const login = () => {
        console.log(JSON.stringify(values));
    }

    // Retorna os dados e funções para serem usados na tela
    return {
        ...values,  // userEmail e userPassword
        onChange,   // função para atualizar campos
        login       // função de login
    };
}

export default HomeViewModel;