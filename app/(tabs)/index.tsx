import { useState } from 'react';
import { Image, StyleSheet, TextInput, Button, View, Alert, TouchableOpacity } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Por favor ingresa un correo y contraseña');
      return;
    }
    Alert.alert('Inicio de sesión', `Bienvenido, ${email}!`);
  };

  const handleRegister = () => {
    Alert.alert('Registro', 'Redirigiendo a la página de registro...');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/logo.png')}
        style={styles.reactLogo}
      />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bienvenido</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedView style={styles.loginContainer}>
        <ThemedText type="subtitle">Iniciar Sesión</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Ingresar" onPress={handleLogin} />
        <TouchableOpacity onPress={handleRegister} style={styles.registerButton}>
          <ThemedText type="defaultSemiBold" style={styles.registerText}>¿No te has registrado aún?</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 150,
    width: 150,
    marginBottom: 20,
  },
  loginContainer: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '100%',
  },
  registerButton: {
    marginTop: 10,
  },
  registerText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
