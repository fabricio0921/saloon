import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Home({ navigation }) {
    return(
        <View style={styles.container}>
       
        <TouchableOpacity style={styles.btHorarios}>
        <Text style={styles.txtHorario}>10:00</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.btHorarios}>
        <Text style={styles.txtHorario}>11:00</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.btHorarios}>
        <Text style={styles.txtHorario}>12:00</Text>

        </TouchableOpacity>
      
        
        </View>
    )
    
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btHorarios:{
        width:'90%',
        height:50,
        borderWidth:2,
        borderColor:'#6588A6',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        backgroundColor:'white',
        shadowColor:'grey',
        margin:5
        
    },
    txtHorario:{
        fontSize:20,
        fontWeight:'bold'
    }
    
  });
