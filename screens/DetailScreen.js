
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image,ScrollView, } from 'react-native';
import PropTypes from 'prop-types';
import GameDetail from '../components/GameDetail';


export default class DetailScreen extends Component {
    constructor(props) {
        super(props);
        const {navigation} =this.props;
        const slug =navigation.getParam('oyun','oyun-slug');
        
        this.state = {
          gameSlug:slug,
          oyun:[],
          
         
        };
      }
      

      componentDidMount(){
        
        
        this.dataGet();
    
        
      }
      dataGet=()=>{
        const axios = require("axios");
    
        axios({
              "method":"GET",
              "url":`https://rawg-video-games-database.p.rapidapi.com/games/${this.state.gameSlug}`,
              "headers":{
              "content-type":"application/octet-stream",
              "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
              "x-rapidapi-key":"a47b4b5427msh8bece100e72a426p1106f0jsn90a14dc9f294"
            
            }
            })
            .then((response)=>{
          
              this.setState({
                
                oyun:response.data,
               
              });
              
            })
            .catch((error)=>{
              console.log(error)
            })
    
      };
      
      
      static navigationOptions  = {
        
          title: "VideoGameDetails",
          
        
      };

    render() {
      
     
      return (
        <View style={styles.container}>
          <Text style={styles.gameNameText}>{this.state.oyun.name}</Text> 
          <Image resizeMode={'contain'} style={{width: 350, height: 200 ,}} source={{uri:this.state.oyun.background_image_additional}}/>
          <Text style={styles.gameText}>{"Çıkış tarihi:"} {this.state.oyun.released}</Text> 
          <Text style={styles.gameText}>{"Puan:"} {this.state.oyun.rating}</Text> 
          <ScrollView>
               
           <Text style={styles.gameText}>{this.state.oyun.description_raw}</Text>
               
          </ScrollView>
          
        </View>
      );
    }
  }

  /*DetailScreen.propTypes = {
    oyun: PropTypes.string,
    
  };*/

  const styles = StyleSheet.create({
    container:{
      
      
      flex:1,
      justifyContent:"center",
      alignItems:"center",

      
    },
  
    gameText:{
      
      alignItems:"center",
      justifyContent:"center",
      fontSize:14,
      fontStyle: "normal",
  
    },
    gameNameText:{
      
      alignItems:"center",
      justifyContent:"center",
      fontSize:24,
      fontWeight: 'bold',
  
    },
  
  });