import React,{useState} from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default function NovoUsuario({ navigation }) {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    function addUsuario(){
        fetch('https://fcwebdes.000webhostapp.com/marker/cadastrousuario.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
 
        name : nome,
 
        email : email,
 
        password : senha
 
        
 
      })
 
      }).then((response) => response.json())
          .then((responseJson) => {
 
            // Showing response message coming from server after inserting records.
            Alert.alert(responseJson);
 
          }).catch((error) => {
            console.error(error);
          });
    }



    return (
        <View style={styles.container}>
            <View style={styles.containerForm}>
                <Image
                    style={styles.Logo}
                    source={require('../assets/usuario.png')}
                />
                <Input
                    placeholder="Nome"
                    leftIcon={<Icon name="user" size={30} color="#6588A6" />}
                    style={styles.textInput}
                    onChangeText={(nome)=>setNome(nome)}
                    width={'80%'}
                    color="#6588A6"
                />
                <Input
                    placeholder="Email"
                    leftIcon={<Icon name="envelope" size={23} color="#6588A6" margin={10} />}
                    style={styles.textInput}
                    onChangeText={(email)=>setEmail(email)}

                    width={'80%'}
                    color="#6588A6"
                />

                <Input
                    placeholder="Senha"
                    leftIcon={<Icon name="key" size={25} color="#6588A6" />}
                    style={styles.textInput}
                    onChangeText={(senha)=>setSenha(senha)}
                    secureTextEntry={true}
                    width={'80%'}
                    color="#6588A6"
                />
                <TouchableOpacity style={styles.bt} onPress={addUsuario} >
                    <Text>Cadastrar</Text>
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
        justifyContent: "center"

    },
    containerForm: {
        width: "85%",
        alignItems: "center",
        justifyContent: "center"

    },
    Logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        borderRadius: 50,
        marginBottom: 40


    },
    bt: {
        width: "95%",
        height: 50,
        backgroundColor: "#6588A6",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 5,
        
      },

});
