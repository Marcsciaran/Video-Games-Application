import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList,ActivityIndicator,TouchableOpacity } from 'react-native';

import GameAvatar from  '../components/GameAvatar';


export default class HomeScreen extends Component {
  static navigationOptions = {
    
    title: 'VGD',
    headerTitleStyle: { 
      textAlign:"center", 
      flex:1 
  },
    
    
  };
  constructor(props) {
    super(props);
    this.state = {
      oyunlar:[],
      page:1,
      loading: true,
      dataApping:false,
    };
  }

componentDidMount(){
    this.dataGet();

    
  }
  dataGet=()=>{
    const axios = require("axios");

    axios({
        "method":"GET",
        "url":`https://rawg-video-games-database.p.rapidapi.com/games?page=${this.state.page}`,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key":"your_API_key"
        
        }
        })
        .then((response)=>{
          
          const games =[...this.state.oyunlar,...response.data.results];
          this.setState({
            

            oyunlar:games,
            loading:false,


          });
          
        })
        .catch((error)=>{
          console.log(error)
        })

  };
  
  loadMore=() => {
    this.setState({
      page:this.state.page+1,
      dataApping:true,
    }, () =>{
      this.dataGet();
    }
    );

  };

  renderFooter=()=>{
    if(this.state.loading) return null;
    return(
      <View>
        <ActivityIndicator size="large"/> 
      </View>

    )

  };

 /*basildi=()=>{
        this.setState({ oyun: item.slug });
        this.props.navigation.navigate('Detail', {oyun:this.state.oyun})

    };*/


  render() {
    return (
      <View  style={styles.container}>
       <FlatList
         ListFooterComponent={this.renderFooter}
         data={this.state.oyunlar}
         renderItem={({item}) =><TouchableOpacity onPress={()=>{this.props.navigation.navigate('Detail', {oyun:item.slug}) }}>
                                 <GameAvatar game={item.name} img={item.background_image} />
                               </TouchableOpacity> }
         keyExtractor={({id}, index) => id}
         onEndReached={this.loadMore}
         onEndReachedThreshold={0.2}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    alignItems:"center",
    justifyContent:"center",
    
  },
  

});
