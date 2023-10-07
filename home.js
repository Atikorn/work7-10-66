import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import globalStyles from "./global-style";

export default function Home({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text style={styles.Text}>HomeScreen</Text>
            <Button title="GO TO ABOUT"
                onPress={() => navigation.navigate("About")}
            />
            <Button title="ข้อมูลนักศึกษาคนที่ 1"
                onPress={() => navigation.navigate("Contact",{
                    id: 123456789,              //number
                    name:'Atikorn',             //string
                    married: true,              //boolean
                    phone:['064696328','191'],  //array
                    education:{                 //object
                        bachelorsDegree:'Information System',
                        mastersDegree:'IT'
                    }
                }
                )}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontSize:20,
        fontStyle:'bold',
        marginBottom:10
        
    }
})