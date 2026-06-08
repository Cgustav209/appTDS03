import React, { useState } from "react";

const RecuperarSenhaViewModel = () => {
        const [values, setValues] = useState({          
            userEmail: '',
        });

        const onChange = (property: string, value: any) => {
            setValues({ ...values, [property]: value });
         }

        const recuperarSenha = () => {
            console.log(JSON.stringify(values));
         } 
        return { 
            ...values,
             onChange,
            recuperarSenha
        };
}


export default RecuperarSenhaViewModel;