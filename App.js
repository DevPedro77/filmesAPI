import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import api from "./src/service/api";
import Filmes from "./src/Filmes";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    async function loadFilmes() {
      const response = await api.get('r-api/?api=filmes');
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  },[]);

  if(loading) {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <ActivityIndicator color={'#2980b9'} size={45}/>
      </View>
        
    )
  }else {
    return (
      <View style={styles.container}>
        <FlatList
        data={filmes}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({item}) => <Filmes data={item} /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})