//1.import: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2. main: Zona de componentes
export default function ContadorScreen() {

  const [Contador, setContador]=useState(0);
  


  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}>{Contador}</Text>

      <View style={styles.contenedorBotones}>

      <Button color="red"title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button color="red"title='Quitar' onPress={()=>setContador(Contador-1)}/> 
      <Button color="red"title='Reiniciar' onPress={()=>setContador(0)}/>

      </View>

      
        

      <StatusBar style="auto" />
    </View>
    
  );
}
//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7c7878ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color: 'rgba(13, 26, 91, 1)',
    fontSize:30,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine:'line-through',

  },

   texto2:{
    color: 'rgba(143, 1, 1, 1)',
    fontSize:40,
    fontFamily: 'Courier',
    fontWeight: '900',
    textDecorationLine:'underline',

  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:15,
  },


});