import { Text, View } from 'react-native';
import { styles } from '../theme/calculadoraTheme';
import BotonCalc from '../components/BotonCalc';


const CalculadoraScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
      <Text style={styles.resultadoPequeño}>1,000.50</Text>
      <Text style={styles.resultado}>1,000.50</Text>

      <View style={styles.fila}>
        <BotonCalc text="C" color='#9B9B9B' textColor='black'/>
        <BotonCalc text="+/-" color='#9B9B9B' textColor='black'/>
        <BotonCalc text="%" color='#9B9B9B' textColor='black'/>
        <BotonCalc text="/" color='#FF9427' textColor='white'/>
      </View>

      <View style={styles.fila}>
        <BotonCalc text="7" color='#424141' />
        <BotonCalc text="8" color='#424141' />
        <BotonCalc text="9" color='#424141' />
        <BotonCalc text="x" color='#FF9427' />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="4" color='#424141' />
        <BotonCalc text="5" color='#424141' />
        <BotonCalc text="6" color='#424141' />
        <BotonCalc text="-" color='#FF9427' />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="1" color='#424141' />
        <BotonCalc text="2" color='#424141' />
        <BotonCalc text="3" color='#424141' />
        <BotonCalc text="+" color='#FF9427' />
      </View>

      <View style={styles.fila}>
        <BotonCalc text="0" color='#424141' ancho/>
        <BotonCalc text="." color='#424141' />
        <BotonCalc text="=" color='#FF9427' />
      </View>

    </View>
  )
}

export default CalculadoraScreen;