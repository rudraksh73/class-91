import React from "react"
import { View, StyleSheet, Text } from "react-native"

export default class hockey extends React{
    render(){
        return(
            <View style={styles.Views}>
                <Text style={styles.texts}>
                hockey
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
     Views:{backgroundColor:"white", flex:1},
     texts:{fontSize:30,fontFamily:"comic sans ms",alignSelf:"center"}
})