import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Alert,Image,Button} from 'react-native'

export default function FlatListDemo({navigation}){
    let a = <Image source={require('./iphone.png')} style={styles.img} />
    let b = <Image source={require('./ipad.png')} style={styles.img} />
    let c = <Image source={require('./airpods.png')} style={styles.img} />
    let d = <Image source={require('./watch.png')} style={styles.img} />

   const listData = [
    {name:'Iphone15 ProMax Plus UltraMax',price:68900, img:[a],},
    {name:'Airpods Plus Plus UltraProMax',price:17500,img:[c]},
    {name:'Ipad ProPlus Ultra',price:86900, img:[b]},
    {name:'AppleWatch Ultra Gen150',price:35000,img:[d]}
   ]
   const onPressItem = (item)  => navigation.navigate("Detail",
    {
    name: item.name,
    img: item.img, 
    price: item.price
    }
)
   const renderFlatListItem = (listData) =>{
        return (
            
            <TouchableOpacity onPress={() => onPressItem(listData.item)}>
                <View key={listData.item.name} style={styles.flatListItem}>
                    <Text style={styles.itemimg}>{listData.item.img}</Text>
                    <Text style={styles.itemName}>{listData.item.name}</Text>
                    <Text style={styles.itemPrice}>{listData.item.price}฿</Text>
                </View>
            </TouchableOpacity>
        )
   }
    return(
        <View style={styles.container}>
           <Text style={{alignSelf:'center', fontSize:20}}>รายการสินค้า</Text>
           <FlatList data={listData} 
           renderItem={renderFlatListItem}
           keyExtractor={(item, index) => item+index}
           style={styles.flatList}
           contentContainerStyle={styles.flatListContent}
           numColumns={2}
           />
        </View>      
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 50,
    },
    flatList:{
        marginTop: 10,
        
    },
    flatListContent:{
        margin: 10,
        paddingBottom: 50, 
        alignItems:'center',

    },
    flatListItem:{
        width: 150,
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor:'#cde',
        margin: 10,
        padding:10,
        alignItems:'center',
        borderRadius:15
    },
    itemName:{
        fontSize:'18',
        fontWeight:'bold',

    },
    itemPrice:{
        fontSize:'16',
        color:'gray'
    },
    img:{
        width:50,
        height:50
    },
    imgnoey:{
        width:250,
        height:250,
        justifyContentl:'center',
        alignItems:'center',
        marginLeft:50
    }
})