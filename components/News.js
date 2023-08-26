import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'

const New = () => {

    const [articles, setArticles] = useState();
    const [loading, setloading] = useState(true);

    useEffect(() => {
        getData();
    },[])

    const getData = async() => {
        try{
            const response = await fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e2e21e6d9ca44a1d88989e7d3afbb8f9')
            const data = await response.json();
            setArticles(data.articles);
            setloading(false);
        } catch(error){
            console.error('Error fetching users : ',error);
            setloading(false);
        }
    }

    const _renderItem = ({item})=>{
        
        let urlToImage = (item.urlToImage !== null)
        ? item.urlToImage
        : 'http://via.placeholder.com/150*150'

        return(
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row',margin:10}}>
                    <Image
                     source = {{uri : urlToImage}}
                     resizeMode = 'cover'
                     style = {{flex:1,width:'100%',height: '100%'}}
                    />
                    <View style={{width:200,alignSelf:'center',margin:5}}>
                        <Text style={{fontSize:14,marginBottom:5}}>{item.title}</Text>
                        <Text style={{fontSize:10}}>{item.source.name}</Text>
                    </View>
                </View>
            </View>
        )
    }

    const _onRefresh = () =>{
        setloading(true);
        getData();
    }

  return (
    <View>
        {
            loading?(
                <ActivityIndicator size="large" color="#0000FF"/>
            ):(
                <FlatList
                 data={articles}
                 keyExtractor={(index) => toString()}
                 renderItem={_renderItem}
                 refreshing={loading}
                 onRefresh={_onRefresh}
                 />
            )
        }
    </View>
  )
}

export default New
const styles = StyleSheet.create({})