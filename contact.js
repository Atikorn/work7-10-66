import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import globalStyles from "./global-style";

export default function Contact({route,navigation}){
    let id = route.params.id || 0  //number
    let name = route.params.name || 'b' //string
    let phone = '' //array
    if(route.params.phone){  
        phone=route.params.phone.join(', ')  
    }
    let bdg ='', mdg='' //object
    if(route.params.education){
        bdg=route.params.education.bachelorsDegree || ''
        mdg=route.params.education.mastersDegree || ''
    }
    let info = `
        Detail: ${'\n'}
        id:${id}
        name:${name}
        married:${route.params.married || false}
        phone:${phone}
        bachelorsDegree:${bdg}
        mastersDegree:${mdg}
    `
    return(
        <View style={globalStyles.container}>
            <Text style={styles.Text}>{info}</Text>
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontSize:15,
        fontStyle:'bold'
    }
})