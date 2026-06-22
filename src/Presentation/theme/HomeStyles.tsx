import { StyleSheet } from "react-native";
import { COLORS } from "./AppTheme";

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

export default styles;