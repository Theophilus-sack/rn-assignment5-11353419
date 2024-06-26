import React from 'react';
import { StyleSheet,View,Image, TouchableOpacity,Text } from 'react-native';

export const Card = () => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/Card.png')}
            style={styles.card}
         />

         <View style={styles.buttonsContainer}>
            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../../assets/send.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={styles.buttonText}>Sent</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../../assets/recieve.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={styles.buttonText}>Receive</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../../assets/loan.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={styles.buttonText}>Loan</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <View style={styles.buttons}>
                        <Image
                            source={require('../../assets/topUp.png')}
                        />   
                    </View>
                </TouchableOpacity>

                <Text style={styles.buttonText}>Topup</Text>
            </View>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    // flex: 1,
    paddingHorizontal: 35,
},
buttons: {
    backgroundColor: "#e4ebea",
    borderRadius: 40,
    width:40,
    height:40,
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
  },
  buttonText: {
    marginLeft:20,
    marginTop:5,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 25
  }
})
