import { StyleSheet, View, Text, Button } from "react-native";
import globalStyles from "./global-style";

export default function Detail({route,navigation}){
    let name = route.params.name
    let img = route.params.img
    let price = route.params.price
    //รูปภาพยึดตามขนาดหน้า flatlistdemo2 ไม่สามารถกำหนดขนาดได้ ต้องกำหยดหน้า flatlistdemo2 อย่างเดียว
    return(
        <View style={globalStyles.container}>
            <Text>{img}</Text>
            <Text style={styles.Text}>{name}</Text>
            <Text style={styles.Text}>ราคา：{price}</Text>

        </View>
    )
}
const styles = StyleSheet.create({
    Text:{
        fontSize:30,
        fontStyle:'bold'
    }
})