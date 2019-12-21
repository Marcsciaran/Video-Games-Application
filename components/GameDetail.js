import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';



export default function GameDetail({game,img,detail}){
  
   
   
    
    return (
      
      <View style={styles.container2} >
          
            <View style={styles.gameAvatar}>
                <Image resizeMode={'contain'} style={{width: 350, height: 400 ,}} source={{uri:img}}/>
                <Text style={styles.gameText}>{game}</Text>  
                <Text style={styles.gameText}>{detail}</Text>  
            </View>
          
         
      </View>
      
    );
  
}

  
  



const styles = StyleSheet.create({
  
  container2:{
    flex:1,
    backgroundColor:"darkorange",
    alignItems:"center",
    justifyContent:"center",
    
    
  },
  gameAvatar:{
    flex:1,
    backgroundColor:"beige", 
    alignItems:"center",
    justifyContent:"center",
    marginBottom:5,
    marginTop:5,
    marginHorizontal:5,
  

  },
  gameText:{
    
    alignItems:"center",
    justifyContent:"center",
    fontSize:12,
    

  },

});