import React from 'react';
import { StyleSheet, View, Image, TextInput, KeyboardType } from 'react-native';

interface Props {
  image: any, 
  placeholder: string,
  value: string,
  keyboardType: KeyboardType,
  secureTextEntry: boolean,
  property: string,
  onChangeText: (property: string, value: string) => void,
}

export const CustomTextInput = ({
    image, placeholder, value, keyboardType, secureTextEntry = false, property, onChangeText
} : Props) => {
    return (
        <View style={ styles.frmInput }>
          <Image
            source={image}
            style={ styles.frmIco }
            />
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                secureTextEntry={secureTextEntry}             
                onChangeText={ text => onChangeText(property, text) }
                style={ styles.textInput }
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
    borderBottomColor: '#ccc',
    marginLeft: 15,
  },

})