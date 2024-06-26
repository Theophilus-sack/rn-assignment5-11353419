import React from 'react';
import {View, StyleSheet, Text, Image} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Card } from './Card';


export const Homeheader = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.box}>
            <Image
                source = {require('../../assets/profile.png')}
                style= {styles.profilePicture}
            /> 
            <View style={styles.userInfo}>
                <Text style={styles.title}>Welcome back,</Text>
                <Text style={styles.subtitle}>Eric Atsu</Text>
            </View>
            <View style={styles.searchIcons}>
                <Image
                    source={require('../../assets/search.png')}
                />
            </View>
            
            </View>
        </View>

        <Card style={styles.card}/>
    </View>
  )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 80,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      box: {
        flexDirection: "row"
      },
      profilePicture: {
        height: 70,
        width: 70,
        marginRight: 20,
      },
      userInfo :{
        marginTop:10,

      },
      title: {
        fontSize: 20,
        paddingBottom: 2,
      },
      subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
      },
      searchIcons: {
        backgroundColor: "#e4ebea",
        borderRadius: 40,
        width:40,
        height:40,
        alignItems: "center",
        justifyContent: "center",
        padding: 35,
        marginLeft: 100
      },


    
    


})