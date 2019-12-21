import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity, } from 'react-native';



export default function GameAvatar({game,img}){
  
   
   
    
    return (
      
      <View style={styles.container2} >
          
            <View style={styles.gameAvatar}>
              <Text style={styles.gameText}>{game}</Text>  
              <Image resizeMode={'contain'} style={{width: 350, height: 400 ,}} source={{uri:img}}/>
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
    fontSize:24,
    

  },

});