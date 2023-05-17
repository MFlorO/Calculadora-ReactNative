import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { styles } from './src/theme/calculadoraTheme';
import CalculadoraScreen from './src/screens/CalculadoraScreen';

export default function App() {
  return (
    <View style={styles.fondo}>
      <StatusBar style="light" />
      <CalculadoraScreen />
    </View>
  );
}

