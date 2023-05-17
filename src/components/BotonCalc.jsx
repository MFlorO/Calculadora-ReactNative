import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from 'prop-types';


const BotonCalc = ({ text, color='#9B9B9B', textColor='white', ancho=false }) => {
  return (
    <TouchableOpacity>
    <View style={{ ...styles.boton, backgroundColor: color, width: ancho ? 180 : 80}}>
      <Text style={{...styles.botonTexto, color: textColor}}>{text}</Text>
    </View>
    </TouchableOpacity>
  );
};

export default BotonCalc;




BotonCalc.prototypes ={
  text: PropTypes.string.isRequired, 
  color: PropTypes.string, 
  textColor: PropTypes.string,
  ancho: PropTypes.string
}


const styles = StyleSheet.create({
  boton: {
    height: 80,
    width: 80,
    backgroundColor: "#9B9B9B",
    borderRadius: 100,
    justifyContent: "center",
    marginHorizontal: 10
  },
  botonTexto: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    padding: 10,
    fontWeight: 400
  }
});