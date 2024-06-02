import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import * as Clipboard from 'expo-clipboard';
import CarSvg from './src/password.svg'
import LoadingScreen from './src/Loading/loadingScreen';

export default function App() {
  const [passwords, setPasswords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula o carregamento dos dados
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Tempo de carregamento simulado de 5 segundos

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const gerarPassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const length = 12;
    let newPasswords = [];

    for (let j = 0; j < 10; j++) {
      let newPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomIndex];
      }
        newPasswords.push(newPassword);
    }
    
    setPasswords(newPasswords);
  };
  const copiarSenha = (senha) => {
    Clipboard.setStringAsync(senha);
    Alert.alert("Senha copiada para a área de transferência!");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <CarSvg/>
      </View>

      <View style={styles.contend}>
      <ScrollView>
        {passwords.map((password, index) => (
          <TouchableOpacity key={index} onPress={() => copiarSenha(password)}>
            <Text style={{color: '#fff', padding: 15, fontSize: 17}}>{password}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      </View>

      <TouchableOpacity style={styles.button} onPress={gerarPassword}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#FFF'}}>Gerar Senhas</Text>
      </TouchableOpacity>
    </View>
    
  );
}


// ESTILOS 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#050707',
  },
  header: {
    marginTop: '-25%',
    alignItems: 'center',
  },
  contend: {
    marginTop: '-40%',
    width: '80%',
    height: '40%',
    borderRadius: 8,
    backgroundColor: '#1E1E1E'
  },
  button: {
    marginTop: '10%',
    backgroundColor: '#5B05E2',
    width: '30%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }
});
