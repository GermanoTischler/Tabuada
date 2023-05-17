import React from "react";
import { ImageBackground, Pressable, TextInput, View, Text } from "react-native";
import fundo from '../../assets/fundo.png';

import styles from './style'

export function Home() {

   // function onChanged(text) {
   //    this.setState({
   //       text: text.replace(`/[^0-9/g, '']`),
   //    });
   // }

   return(
      <ImageBackground source={fundo} style={styles.background}>
         <View style={styles.box}>
            <Text style={styles.title}>DUVIDO VOCÊ ACERTAR!</Text>

            <View style={styles.math}>
               <Text style={styles.operation}>10</Text>
               <Text style={styles.operation}>X</Text>
               <Text style={styles.operation}>7</Text>
               <Text style={styles.operation}>=</Text>
               <TextInput 
                  style={styles.input} 
                  keyboardType="numeric"
                  maxLength={3}
                  // onChangeText={(text) => this.onChanged(text)}7
                  ></TextInput>
         
            </View>
            <View style={styles.btn_box}>
               <Pressable style={styles.btn_pular}>
                  <Text style={styles.pular}>PULAR</Text>
               </Pressable>
               <Pressable style={styles.btn_responder}>
                  <Text style={styles.responder}>RESPONDER</Text>
               </Pressable>
            </View>
         </View>

         <Pressable style={styles.btn_table}>
            <Text style={styles.table}>VER TABUADA</Text>
         </Pressable>
      </ImageBackground>
   )
};