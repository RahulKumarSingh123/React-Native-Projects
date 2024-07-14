
import { Text,Button,Image,View,StyleSheet } from "react-native";



function GetStarted()
{
    let displaySignup=false;
    return (
        <View style={styles.screen}>
            <View style={styles.container1}>
                <Image style={styles.logo}source={{uri:"https://th.bing.com/th?id=OIP.XYBf9M9KpKe3vnlF0aBs2QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"}}></Image>
                <View style={styles.container2}>
                    <Text style={styles.heading}>Welcome</Text>
                    <Image  style={{height:55,width:55}} source={{uri:"https://gifdb.com/images/high/cute-wave-emoji-hand-59s88kk0zj3xho40.gif"}}></Image>
                </View>
            </View>
            
            <View style={styles.container4}>
            <View style={styles.container3}>
                <Text style={styles.body}> Why to get bored? <Image style={{width:35,height:35}}source={{uri:"https://clipground.com/images/sad-emoji-png-7.png"}}></Image></Text>
                <Text style={styles.body}>Chat with your loved ones</Text>
            </View>
                <Button title=">>> Get Started >>>" onPress={displaySignup=true}></Button>
            </View>
        </View>
    )
}


const styles=StyleSheet.create(
    {
        screen:{
            flex:2,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#75DA8B",
            gap:100,
        },
        logo:{
            width:100,
            height:100,
            borderRadius:50,
            
        },
        container1:{
            alignItems:"center",
            gap:15,
        },
        container2:{
            flexDirection:"row",
        },
        container3:{
            alignItems:"center",
            justifyContent:"center",
            gap:5,
        },
        container4:{
            width:270,
            gap:30,
        },
      
        heading:{
            fontSize:50,
            fontWeight:"700",
            color:"#30336B",
        },
        body:{
            fontSize:20,
            fontWeight:"100",
            color:"#0A3D62"
        }
    }
)
export default GetStarted;