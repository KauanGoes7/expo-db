import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function NotFoundScreen() { // Export default adicionado
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página não encontrada!</Text>
      <Link href="/">Voltar para início</Link>
    </View>
  );
}