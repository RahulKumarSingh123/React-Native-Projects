import { View,Text,Button,TextInput,StyleSheet } from "react-native"

function Login(){
    return (
    <>
        <View style={{backgroundColor:'#67E6DC',alignItems:'center',flex:2,justifyContent:'center',gap:15}}> 
             
            <Text style={styles.text}>Login </Text>
            <TextInput placeholder='Email' placeholderTextColor={"#2F363F"}  style={styles.input}></TextInput>
            <TextInput placeholder='Password' placeholderTextColor={"#2F363F"} secureTextEntry style={styles.input}></TextInput>
            <View style={styles.button}><Button title='Login' ></Button></View>
            
        </View>
    </>
    )
    
}

const styles = StyleSheet.create({
    button: {
        height:90,
        borderRadius:3,
        width:310,
        marginTop:10
    },
    input:{
        borderColor:"#2C3335",
            borderRadius:5,
            width:310,
            height:50,
            borderWidth:1.7,
            padding:10,
    },
    text:{
        fontSize:30,
        color:"purple",
        padding:5,
        fontWeight:"bold",
        
    },

});
export default Login;