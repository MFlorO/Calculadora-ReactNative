import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    fondo: {
      flex: 1,
      backgroundColor: 'black',
    },
    calculadoraContainer:{
        flex: 1,
        justifyContent:"flex-end",
        paddingHorizontal: 30, 
    },
    resultado:{
        color: "white",
        fontSize: 60,
        textAlign: "right",
        marginBottom: 25
    },
    resultadoPequeño:{
        color: "grey",
        fontSize: 35,
        textAlign: "right"
    },
    fila:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    }
});
  