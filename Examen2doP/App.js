import { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native-web";
import { ImageBackground, SafeAreaView } from "react-native-web";

export default function ImageBackScreen(){
    const [showSplash, setShowSplash] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4000);
    return () => clearTimeout(timer);
    },[] );

    if (showSplash){
        return(
            <View style={styles.splashContainer}>
             <Text style={styles.splashText}>Bienvenido a la app!</Text>
      </View>
        );

     }
     return (
        <SafeAreaView style={{flex: 1}}>
            <ImageBackground
            source = {{
                uri: 'https://store-images.s-microsoft.com/image/apps.52315.68607194681373551.b4c09a44-be36-42d6-96c5-4a33b566becd.9199c63b-06f1-41b5-8118-c1d2373ee86a?q=90&w=480&h=270',
             }}
             style={styles.background}
             >
                <View style={styles.overlay}>
          <Text style={styles.title}>Bienvenido!</Text>
          </View>
          </ImageBackground>
          </SafeAreaView>

     );
}

const styles = StyleSheet.create({


  splashContainer: {
    flex: 1,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
  },


  splashText: {
    fontSize: 24,
    color: '#fff',
  },


  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});

