import React from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import Badminton from "./badminton"
import Basketball from "./basketball"
import cricket from "./cricket"
import football from "./football"
import hockey from "./hockey"
import vollyball from "./vollyball"

export default class Badminton extends React{
    render(){
        return(
            <View style={styles.Views}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      Badminton
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      basketball
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      cricket
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      football
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      hockey
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.texts}>
                      vollyball
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center",color:"white"},
     button:{alignSelf:"center", justifyContent:"center", width:'70%', height:50, borderRadius:40, backgroundColor:"maroon", marginTop:40}
})