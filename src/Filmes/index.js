import React, { useState } from "react";
import {Text, View, StyleSheet, Image, TouchableOpacity, Modal} from 'react-native';
import Detalhes from "../Detalhes";

export default function Filmes({data}) {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>

        <Image
        source={{uri: data.foto}}
        style={styles.capa}
        />
        <View style={styles.areaBtn}>
          <TouchableOpacity style={styles.btn } onPress={() => setVisibleModal(true)}>
            <Text style={styles.btnText}>Leia Mais</Text>
          </TouchableOpacity>
        </View>
      </View>

    <Modal animationType="slide" visible={visibleModal} transparent={true}>
      <Detalhes filme={data} voltar={ () => setVisibleModal(false)}/>
    </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 15,
    elevation: 2
  },
  capa: {
    height: 250,
    zIndex: 2,
  },
  titulo: {
    fontSize: 18,
    padding: 15
  },
  areaBtn: {
    alignItems: 'flex-end',
    marginTop: -45,
    zIndex: 9
  },
  btn: {
    width: 100,
    backgroundColor: '#0984e3',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderTopLeftRadius: 5
  },
})