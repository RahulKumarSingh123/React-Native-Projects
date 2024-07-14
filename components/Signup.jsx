import { Text,TextInput,Button,View,StyleSheet, TouchableOpacity } from "react-native";

function Signup() {
    return(
        <View style={styles.container1}>
            <Text style={styles.heading}>Create your Account</Text>
            <View style={styles.container2}>
                <TextInput placeholder="Full Name" placeholderTextColor={"#2F363F"} style={styles.input}></TextInput>
                <TextInput placeholder="Email" placeholderTextColor={"#2F363F"}style={styles.input}></TextInput>
                <TextInput placeholder="Password" placeholderTextColor={"#2F363F"}style={styles.input} secureTextEntry></TextInput>
                <TextInput placeholder="Confirm Password" placeholderTextColor={"#2F363F"}style={styles.input}secureTextEntry ></TextInput>
                <View style={{marginTop:19,}}><Button title="Sign Up"></Button></View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create(
    {
        container1:{
            backgroundColor:"#67E6DC",
            flex:2,
            justifyContent:"center",
            alignItems:"center",
            gap:20,
        },
        heading:{
            fontSize:32,
            fontWeight:"700",
            color:"#3C40C6"
        },
        container2:{
            gap:15,
        },
        input:{
            borderColor:"#2C3335",
            borderRadius:5,
            width:310,
            height:50,
            borderWidth:1.7,
            padding:10,
        }
    }
)
export default Signup;