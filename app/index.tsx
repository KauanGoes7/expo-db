import { router } from 'expo-router';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground 
      source={require('../assets/images/tela_inicio.png')} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Logo Dragon Ball API */}
        <Image 
          source={require('../assets/images/logo_dragonballapi.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Botão ENTRAR */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/(tabs)/characters')}
        >
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40, // Espaço entre logo e botão
  },
  logo: {
    width: 300, // Ajuste conforme necessário
    height: 100, // Ajuste conforme necessário
  },
  button: {
    backgroundColor: 'transparent',
    width: 180,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFD700', // Dourado do Dragon Ball
  },
  buttonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 18,
  },
}); 