import React,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { Calendar } from 'react-native-calendario';

export default function HorariosDisponiveis({navigation}) {
  


  
  
  return (
    <View style={styles.container}>
    <Text style={styles.txtTitulo}>Escolha uma data de preferência</Text>
    <View style={styles.inputData}>
    
     <TextInput style={styles.inputTextDate } placeholder='Dia' />
     <Text>/</Text>
     <TextInput style={styles.inputTextDate} placeholder='Mes'/>
     <Text>/</Text>
     <TextInput style={styles.inputTextDate} defaultValue='2001'/>


          
    </View>
    <TouchableOpacity style={styles.btBuscaDatas} onPress={()=>navigation.navigate('Tabs')}>
      <Text>OK</Text>
    </TouchableOpacity>

          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },
  
  txtTitulo:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:30
  },
  inputData:{
    width:'70%',
    height:150,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    flexDirection:'row'

  },
  inputTextDate:{
    width:'30%',
    height:30,
    backgroundColor:'white',
    padding:2,
    alignItems:'center',
    justifyContent:'center',
    fontSize:20,
    borderRadius:3
    
  },
  btBuscaDatas:{
    width:'40%',
    height:50,
    backgroundColor:'pink',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginTop:20
  }
  
});
