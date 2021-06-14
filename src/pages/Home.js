import React, { useState, useEffect, Component } from "react";
import {
  StyleSheet,
  AppRegistry,
  Text,
  TouchableOpacity,
  View,
  alert,
  Alert,
  Keyboard,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

// export default function Home({ navigation }) {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();
//   function login() {

//       fetch("https://fcwebdes.000webhostapp.com/marker/loginuser.php", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,

//           password: password,
//         }),
//       })
//         .then((response) => response.json())
//         .then((responseJson) => {
//           // If server response message same as Data Matched
//           if (responseJson === "Data Matched") {
//             //Then open Profile activity and send user email to profile activity.
//             navigation.navigate("Menu");
//           } else {
//             Alert.alert(responseJson);
//           }
//         })
//         .catch((error) => {
//           console.error(error);
//         });

//   }
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPassword: "",
    };
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    //aqui vamos mandar os dados para o servidor

    fetch("https://fcwebdes.000webhostapp.com/marker/loginuser.php", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        //vamos passar os inputs para o servidor
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson === "Data Matched") {
          this.props.navigation.navigate("Menu", { Email: userEmail });
        } else {
          Alert.alert(responseJson);
          console.log(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
      <Image
        style={styles.Logo}
        source={require('../assets/salao2.png')}
      />
        

        <Input
          placeholder="Email"
          leftIcon={<Icon name="envelope" size={20} color="#6588A6" />}
          style={styles.textInput}
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

        <Input
          placeholder="Senha"
          leftIcon={<Icon name="lock" size={30} color="#6588A6" />}
          style={styles.textInput}
          onChangeText={(userPassword) => this.setState({ userPassword })}
          secureTextEntry={true}
          width={'80%'}
          color="#6588A6"
        />

        <TouchableOpacity style={styles.bt} onPress={this.login}>
          <Text>Login</Text>
        </TouchableOpacity>
        <View style={styles.containerBaixo}>
          <TouchableOpacity >
            <Text>Esqueceu senha</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74FAFF",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "90%",
    height: 50,
   
    borderColor: "#33544F",
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
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
  containerBaixo: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  Logo:{
    width:100,
    height:100,
    marginBottom:20,
    
    
  }
});
AppRegistry.registerComponent("login", () => login);
