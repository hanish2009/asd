import React from "react";
import{Text,View,TouchableOpacity,StyleSheet, TextInput,Image} from 'react-native'
import * as Permissions from 'expo-Permissions' 
import { BarCodeScanner } from "expo-barcode-scanner";

export default class TransactionScreen extends React.Component{
    constructor(){
        super()
        this.state = {
        hasCameraPermissions:null,
        scanned:false,
        scannedBookId:'',
        scannedStudentId:'',
        buttonState:'normal',
        }
    }

  getCameraPermissions = async(id)=>{
      const {status} = await Permissions.askAsync(Permissions.CAMERA)
      this.setState({
          hasCameraPermissions:status==="granted",
          buttonState:'id',
          scanned:false

      })
  }
  
handleBarCodeScanned = async({type,date})=>{
const {buttonState} = this.state
if(buttonState === "BookId"){

    this.setState = ({
        scanned:true,
        scannedBookId:data,
        buttonState:normal,
    })

}

else if(buttonState === "studentId"){

    this.setState = ({
        scanned:true,
        scannedStudentId:data,
        buttonState:normal,
    })
    

}




}
    render(){


        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState

        if(buttonState === "clicked" &&  hasCameraPermissions){
            return(
                <BarCodeScanner 
                onBarCodeScanned = {scanned? undefined:this.handleBarCodeScanned}
                
                    style = {StyleSheet.absoluteFillobject}/>
                )

                    

                }

            
            
        
        else if(buttonState==="normal"){
        return(
            <View style = {styles.container}>
            <View>

                <Image
                
                source = {require("../assets/booklogo.jpg")}
                style = {{width:200,height:200}}
                />

                <Text style = {{textAlign:'center',fontSize:50,}}> Willy </Text> 
            </View>
     
     <View style = {styles.inputView} > 
     
     
     <TextInput style = {styles.inputBox} 

     placeHolder = "Book Id"

     value = {this.state.scannedBookId} 
     
     />
     


           

            <TouchableOpacity 
            style = {styles.scanButton} 
            onPress = {()=>{this.getCameraPermissions("Book Id")}} >
           

            <Text style = {styles.buttonText} >Scan Qr Code</Text>
            </TouchableOpacity>
            </View>

            <View style = {styles.inputView} >
                <TextInput style = {styles.inputBox}
                placeholder = "Student Id"
                value = {this.state.scannedStudentId}
                
                />
             
             <TouchableOpacity style = {styles.scanButton}
             onPress = {()=>{this.getCameraPermissions("Student Id")}}>
                 <Text style = {styles.buttonText}>Scan Qr Code</Text>
             </TouchableOpacity>
               </View>
               </View>
                
        )
        
    }
}

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:40,
      marginTop:100,
      marginLeft:150,
      marginRight:150,
      
      
    },
    displayText:{
        borderRadius:50,
        fontSize:30,
    textDecorationLine:'underline',
    width:200,
    height:200


    },

    scanButton:{
    backgroundColor:"white",
    padding:10,
    margin:10,



},

inputView:{
    flexDirection:'row',
    margin:20,
},

inputBox:{
    width:200,
    height:40,
    borderWidth:1.5
}

  });
 


  