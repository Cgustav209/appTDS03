import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../Presentation/theme/AppTheme";

interface Props {
  text: string,
}

export const RoundedButton = ({ text }: Props) => {
    return (
        <TouchableOpacity 
          onPress={() => {}}
          style= { styles.bnt}
        >
          
            <Text style={ styles.bntTxt }> {text} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bnt: {
        width: '100%',
        height: 50,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    bntTxt: {
        color: COLORS.bgColor,
        fontSize: 16,
        fontWeight: 'bold',
    }
})