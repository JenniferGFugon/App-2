import React, { useEffect, useState } from "react";
import {Container,View,Header} from "native-base";
import { StyleSheet, Text,Dimensions} from "react-native";

//import backend from "../api/backend";
//import getEnvVars from "../../enviroment";
import { LinearGradient } from 'expo-linear-gradient';
const { width, height } = Dimensions.get("window");

const registrarUsuario = ({ route,navigation }) => {
  

      return (
        <Container style={styles.Fondo}  >
            <Header style={styles.header} >
             
            </Header>
             <LinearGradient 
                colors={[colors= '#AB2C2C','#9C4142','#866064','#78757A', '#62959C','#56A6AE','#48BBC4','#3CCCD6']} 
                style={styles.LinearGradient}
                start={{ x: 1, y: 1 }}
                end={{ x: 1, y: 0 }}>   
                    <Text>pantalla de registro</Text>         
            </LinearGradient>
        </Container>
    );
}
const styles = StyleSheet.create({
  Fondo: {
    width: width,
    height: height,
    },
  
    LinearGradient: {
      height: height,
      width: width
      
    },
  estiloH1: {
    color: '#f2f2f2',
    textAlign: "center",
    },

  letrasImage: {
    width: 222,
    height: 30,
    margin: 20,
    marginRight: 38,
  },

  logoImage: {
    width: 60,
    height: 48,
    marginLeft: 30
  },
    
  icono: {
    color: "green",
    margin: 10,
  },

  header: {
    backgroundColor: '#fff',
  },

  bookImage: {
    width: width * 0.60,
    height: height * 0.45,
    marginTop: 0,
    borderRadius:20,
    shadowOpacity:6
  },
  
  tituloLibro: {
    fontFamily: 'sans-serif-thin',
    fontSize: 25,
    fontWeight: "bold",
    justifyContent: "center",
    color: "#fff",
    marginTop: 18,
    marginBottom: 15,
    textAlign:"center"
  },  
  
  texto:{
    flex:1,
    color:"white",
    justifyContent:"center",
    textAlign:"left",
    fontSize: 19,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    fontWeight:"bold"
  },
  textoContenido:{
    flex:1,
    color:"white",
    justifyContent:"center",
    textAlign: "justify",
    fontSize: 17,
    margin: 18
  },

  tags: {
    fontWeight: "bold",

    color:"white",
    justifyContent:"center",
    fontSize: 16,
    textAlign:"left",
    marginTop: 5,
    marginBottom: 5,
    
  },
  tagsData:{
    
    color:"white",
    justifyContent:"center",
    fontSize: 16,
    textAlign:"right",
    marginTop: 5,
    marginBottom: 5,
    marginRight:5
  },
  textoAlineadoL:{
    color:"white",
    textAlign: "center" ,
    marginLeft: 70,
    justifyContent:"flex-start",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    width:200,
    height:40,
    fontSize:20
  },
  cardImagen:{
    flex:1,
    width: width * 0.60,
    height: height * 0.45,
    borderRadius:20,
    overflow:'hidden',
    marginLeft:80,
    marginBottom: 15,
    borderColor:"transparent"
  },
  cardTexto:{
    backgroundColor:"transparent",
    flex:1,
    flexDirection:"row",
    borderRadius:0,
    overflow: 'hidden',
    padding: 10,
    borderColor: "transparent",
    borderRadius:5,
    
    
  },
  badge:{
    backgroundColor :"#B5F5B6",
    fontWeight: "bold",
    borderWidth:1,
    width: "auto"
  },
  textBadge:{
    flex:1,
    marginLeft:5,
    color:"black"
  }

  });

export default registrarUsuario;