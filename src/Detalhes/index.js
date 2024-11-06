import React from "react";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Detalhes (props) {
  return (
    <View style={styles.container}> 
        <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar}>
              <Text style={{color: '#fff', fontSize: 16}}> Voltar</Text>
            </TouchableOpacity>

            <Text style={styles.titulo}>{props.filme.nome}</Text>
            <Text style={styles.sinopse}>Sinopse:</Text>
            <Text style={styles.detalhesFilme}>{props.filme.sinopse}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#121212',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  btnVoltar: {
    backgroundColor: '#0984e3',
    padding: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    textAlign: 'center'
  },
  titulo: {
    textAlign: 'center',
    color: '#fff',
    padding: 10,
    fontSize: 28,
  },
  sinopse: {
    color: '#fff',
    marginBottom: 8,
    marginLeft: 10
  },
  detalhesFilme: {
    color: '#fff',
    marginRight: 10,
    marginLeft: 10
  }
})