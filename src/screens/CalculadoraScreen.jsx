import { Text, View } from 'react-native';
import { styles } from '../theme/calculadoraTheme';
import BotonCalc from '../components/BotonCalc';
import useCalculadora from '../hook/useCalculadora';



const CalculadoraScreen = () => {

  const { numeroAnterior, numero, limpiar, armarNumero, PositivoNegativo, del, btnSumar, btnRestar, btnMultiplicar, btnDividir, calcular } = useCalculadora()

  return (
    <View style={styles.calculadoraContainer}>
      { numeroAnterior !== '0' && <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color='#9B9B9B' textColor='black' onPress={limpiar}/>
        <BotonCalc text="+/-" color='#9B9B9B' textColor='black' onPress={PositivoNegativo}/>
        <BotonCalc text="del" color='#9B9B9B' textColor='black' onPress={del}/>
        <BotonCalc text="/" color='#e66dc6' textColor='white' onPress={btnDividir}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc text="7" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="8" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="9" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="x" color='#e66dc6' onPress={btnMultiplicar}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc text="4" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="5" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="6" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="-" color='#e66dc6' onPress={btnRestar}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc text="1" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="2" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="3" color='#424141' onPress={armarNumero}/>
        <BotonCalc text="+" color='#e66dc6' onPress={btnSumar}/>
      </View>

      <View style={styles.fila}>
        <BotonCalc text="0" color='#424141' onPress={armarNumero} ancho/>
        <BotonCalc text="." color='#424141' onPress={armarNumero}/>
        <BotonCalc text="=" color='#e66dc6' onPress={calcular}/>
      </View>

    </View>
  )
}

export default CalculadoraScreen;