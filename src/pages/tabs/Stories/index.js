import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Stories({ navigation }) {
    return(
        <View style={styles.container}>
       
        <Text>Meu Histórico</Text>
      
        
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
    textInput:{
        width:'90%',
        height:50,
        borderWidth:1,
        borderColor:'pink',
        borderRadius:5,
        marginTop:10
    },
    bt:{
        width:'90%',
        height:50,
        backgroundColor:'pink',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        borderRadius:5
        
    },
    
  });
