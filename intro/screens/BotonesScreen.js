import { Text, StyleSheet, View, Pressable, TouchableOpacity, TouchableWithoutFeedback, Switch } from 'react-native'
import { useState } from 'react';


export default function BotonesScreen() {
  const [accion, setAccion] = useState('nada');
  const[isDisable, setIsDisable]=useState('falso');

    return (
      <View style ={styles.container}>
        <Text>Activado :</Text>
        <Switch
        onValueChange={()=> setIsDisable(!isDisable)}
          value={!isDisable}

        />

        <Text>

          {accion}

        </Text>
        <Pressable
        onPressIn={() => setAccion('Pressablein')}
        onPressOut={() => setAccion('Pressable Out')}
        onLongPress={() => setAccion('Pressable Long')}
        disabled={isDisable}
        
        
        
        >
          {({pressed}) => (
            <View style={[styles.card, !pressed && styles.shadow]}>
            <view style={styles. mockImage}/>
            <Text>
              {pressed ? 'Tarjeta presionada':'Tarjeta no presionada'}
              
            </Text>

          </View>

          )}
          
        </Pressable>
        <TouchableOpacity
           activeOpacity={0.2}
           onPress={()=> setAccion('Opacity')}
           disabled={isDisable}
        
        >

          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>
              Esta es una Tarjeta
            </Text>
          </View>

        </TouchableOpacity>
        <TouchableWithoutFeedback
            onPress={()=> setAccion('Without Feedback')}
            disabled={isDisable}
            
        
        >
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.mockImage}/>
            <Text>
              Esta es una Tarjeta
            </Text>
          </View>
       
        </TouchableWithoutFeedback>
      </View>
     
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        width: 200,
        height: 250,
        padding: 20,
        display: "flex",
        flexDirection: 'column',
        borderRadius: 8,
        margin: 15
    },
    mockImage: {
        flex: 1,
        backgroundColor: 'gray',
        marginBottom: 8,
        borderRadius: 8
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 10},
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 10,
    },
});