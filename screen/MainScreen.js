import { useState } from "react";
import { View,Text,StyleSheet, TextInput, Button, Alert} from "react-native";

function MainScreen(){
    const [result,setresult]=useState('');
    const [enterednumber1,setenterednumber1]=useState('');
    const [enterednumber2,setenterednumber2]=useState('');

    function numberInputHandler1(enteredText){
        setenterednumber1(enteredText)
    }

    function numberInputHandler2(enteredText){
        setenterednumber2(enteredText)
    }

    function resetInputHandler(){
        setenterednumber1('');
    }

    function resetInputHandler2(){
        setenterednumber2('');
    }

    function addition(){
        if(!(!!enterednumber1)){
            Alert.alert('Enter a number',
            'Enter a number in the first number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler}])
            return;
        }
        if(!(!!enterednumber2)){
            Alert.alert('Enter a number',
            'Enter a number in the second number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler2}])
            return;
        }
        else{
        const result=parseInt(enterednumber1)+parseInt(enterednumber2);
        setresult(result)
        }
    }

    function subtraction(){
        if(!(!!enterednumber1)){
            Alert.alert('Enter a number',
            'Enter a number in the first number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler}])
            return;
        }
        if(!(!!enterednumber2)){
            Alert.alert('Enter a number',
            'Enter a number in the second number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler2}])
            return;
        }
        else{
        const result=parseInt(enterednumber1)-parseInt(enterednumber2);
        setresult(result)
        }
    }

    function multiplication(){
        if(!(!!enterednumber1)){
            Alert.alert('Enter a number',
            'Enter a number in the first number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler}])
            return;
        }
        if(!(!!enterednumber2)){
            Alert.alert('Enter a number',
            'Enter a number in the second number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler2}])
            return;
        }
        else{
        const result=parseInt(enterednumber1)*parseInt(enterednumber2);
        setresult(result)
        }
    }

    function division(){
        if(!(!!enterednumber1)){
            Alert.alert('Enter a number',
            'Enter a number in the first number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler}])
            return;
        }
        if(!(!!enterednumber2)){
            Alert.alert('Enter a number',
            'Enter a number in the second number field',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler2}])
            return;
        }
        if(parseInt(enterednumber2)===0){
            Alert.alert('Divide Error',
            'Zero cannot be in denominator',
            [{text:'Okay',style:"destructive",onPress:resetInputHandler2}])
            return;
        }
        else{
        const result=parseInt(enterednumber1)/parseInt(enterednumber2);
        setresult(result)
        }
    }

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Calculator</Text>
            </View>
            <View style={styles.resultContainer}> 
                <Text style={styles.resultText}>Result:{result}</Text>
            </View>
            <View>
                <TextInput style={styles.inputContainer} placeholder="Enter first number" keyboardType="number-pad" value={enterednumber1} onChangeText={numberInputHandler1}   placeholderTextColor="white"   keyboardAppearance="light"/>
                <TextInput style={styles.inputContainer} keyboardType="number-pad" value={enterednumber2} onChangeText={numberInputHandler2} placeholder="Enter second number" placeholderTextColor="white" keyboardAppearance="light"/>
            </View>
            <View style={styles.buttonTop}>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                <Button title="+" onPress={addition} color={"black"}/>
                </View>
                <View style={styles.button}>
                <Button title="-" onPress={subtraction} color={"black"}/>
                </View>
            </View>
            <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="*" onPress={multiplication} color={"black"}/>
                </View>
                <View style={styles.button}>
                <Button  title="/" onPress={division} color={"black"}/>
                </View>
            </View>
            </View>
        </View>
    );
}

export default MainScreen

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    },
    headerContainer:{
        marginTop:10,
        padding:40,
        marginLeft:10
    },
    headerText:{
        color:'white',
        fontSize:38,
        marginLeft:50,
        fontWeight:'bold',
    },
    resultContainer:{
        padding:40,
        marginLeft:'22%',
        marginVertical:40
    },
    resultText:{
        color:'yellow',
        fontSize:25,
    },
    inputContainer:{
        color:'white',
        height:50,
        borderBottomColor:'yellow',
        borderBottomWidth:2,
        textAlign:'center',
        fontSize:20
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:20,
        alignItems:'center',
        justifyContent:'center'
       },
       button:{
        width:100,
        marginHorizontal:8,
        borderRadius:8,
        borderColor:'yellow',
        borderWidth:3
       },
       buttonTop:{
        marginTop:10
       }
})