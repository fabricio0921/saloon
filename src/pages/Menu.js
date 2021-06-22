import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

export default function Menu({navigation}) {
  
  return (
    <View style={styles.container}>
      <Text>Escolha seu serviço</Text>
     

     
      <View style={styles.containerServices}>
        <TouchableOpacity style={styles.btServico} onPress={()=>navigation.navigate('HorariosDisponiveis')}>
        <Image
        style={styles.imgBtServices}
        source={require('../assets/corteMasculino.png')}
      />
        <Text style={styles.textBtServico}>Serviços cabelo Masculino</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btServico}>
        <Image
        style={styles.imgBtServices}
        source={require('../assets/corteFemenino.png')}
      />
        <Text style={styles.textBtServico}>Serviços cabelo Feminino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btServico}>
        <Image
        style={styles.imgBtServices}
        source={require('../assets/manicure.png')}
      />
        <Text style={styles.textBtServico}>Manicure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btServico}>
        <Image
        style={styles.imgBtServices}
        source={require('../assets/pedicure.png')}
      />
        <Text style={styles.textBtServico}>Pedicure</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btServico}>
        <Image
        style={styles.imgBtServices}
        source={require('../assets/massagem.png')}
      />
        <Text style={styles.textBtServico}>Massagem</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    
  },
  containerServices:{
    width:'100%',
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent:'center',
    
    padding:30
  },
  btServico: {
    width: "95%",
    height: 100,
    borderColor: "#6588A6",
    borderWidth: 2,
    borderRadius: 3,
    margin:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white'
    
  },
  textBtServico:{
      fontSize:15,
      fontWeight:'bold',
      textAlign:'center'
  },
  imgBtServices:{
    width:50,
    height:50,
    borderRadius:20
  }
  
});
