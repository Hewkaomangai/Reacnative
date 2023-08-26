import { StyleSheet, Text, View, SafeAreaView, ActivityIndicator, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { RefreshControl } from 'react-native-web';

const FLastListAPI = () => {

    const[refreshing, setRefreshing] = useState(true);
    const[dataSource, setDataSource] = useState([])

    //Service to get the data from the server
    const getData = async ()=>{
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((responseJson)=>{
            setDataSource(responseJson)
            setRefreshing(false);
        }).catch((error)=>{
            console.error(error);
        });
    };

    const getItem = (item)=>{
        //Function for click on an item
        alert('Id : ' + item.id + 'Title : ' + item.title)
    };

    const ItemView = ({item})=>{
        return(
            <Text
                style={styles.itemStyle}
                onPress={()=> getItem(item)}
            >
                {item.title}
            </Text>
        )
    }

    useEffect(()=>{
        getData();
    },[]);

    const ItemSeparatorView = ()=>{
        return(
            <View
            style = {{
                height: 0.5,
                width: '100%',
                backgroundColor:'#C8C8C8'
            }}/>
        );
    };

    const onRefresh = ()=>{
        //Clear old data of the List
        setDataSource([]);
        //Call the service to ge4t the lastest data
        getData();
    };



  return (
        <SafeAreaView   SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                {refreshing? <ActivityIndicator/> : null}
                <FlatList
                    data={dataSource}
                    keyExtractor={(index)=>index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    refreshControl={
                        <RefreshControl
                         refreshing = {refreshing}
                         onRefresh = {onRefresh}/>
                    }
                />
            </View>
        </SafeAreaView>
  )
}

export default FLastListAPI

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },
    itemStyle:{
        padding:10,
    },
    textInputStyle:{
        height:40,
        borderWidth:1,
        paddingLeft:20,
        marginTop:30,
        borderColor:'#009688',
        backgroundColor:'#FFFFFF'
    },
})