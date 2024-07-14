import { Text,Button,View,Image, ScrollView } from "react-native";
const myproducts=fetch("https://rapidapi.com/raygorodskij/api/BestBuy/playground/apiendpoint_2be69950-f967-11e7-bfbd-91727ebbe231getAllCategories");
console.log(myproducts);
function Products(){
    <ScrollView>
        <View><Text>Products</Text></View>
        <View>
            <View>
                <Image></Image>
                <Text></Text>
            </View>
        </View>
    </ScrollView>
}