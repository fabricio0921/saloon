import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function Store({ navigation }) {
    return(
        <View style={styles.container}>
       
        <View style={styles.horariosMarcardos}>
        <Text style={styles.txtServico}>Corte de Cabelo Feminino</Text>

        <Text style={styles.txtServicosDetalhes}>Data: 02/10/2021</Text>
        <Text style={styles.txtServicosDetalhes}>Horário: 10:00</Text>
        <Text style={styles.txtServicosDetalhes}>Profissional: Katriele Silva</Text>
        </View>

        <View style={styles.horariosMarcardos}>
        <Text style={styles.txtServico}>Relaxamento Capilar</Text>

        <Text style={styles.txtServicosDetalhes}>Data: 02/10/2021</Text>
        <Text style={styles.txtServicosDetalhes}>Horário: 13:00</Text>
        <Text style={styles.txtServicosDetalhes}>Profissional: Katriele Silva</Text>
        </View>
      
        
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
    horariosMarcardos:{
        width:'90%',
        height:150,
        backgroundColor:'pink',
        borderRadius:5,
        marginBottom:10
    },
    txtServico:{
        fontWeight:'bold',
        fontSize:25,
        alignSelf:'center',
        padding:10
    },
    txtServicosDetalhes:{
        fontSize:20,
        marginLeft:20,
    }
    
  });
