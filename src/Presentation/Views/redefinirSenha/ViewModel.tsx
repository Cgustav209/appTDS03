import React, { useState } from "react";

const RedefinirSenhaViewModel = () => {
        const [values, setValues] = useState({   
            userToken: '',       
            userEmail: '',
            userPassword: '',
            userConfirmPassword: '',
        
        });

        const onChange = (property: string, value: any) => {
            setValues({ ...values, [property]: value });
         }

        const redefinirSenha = () => {
            console.log(JSON.stringify(values));
         } 
        return { 
            ...values,
             onChange,
            redefinirSenha
        };
}


export default RedefinirSenhaViewModel;