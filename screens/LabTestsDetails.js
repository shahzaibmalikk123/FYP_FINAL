import React from "react";
import { StatusBar } from "expo-status-bar";
import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
    StyleSheet,
    TouchableHighlight,
    ImageBackground,
    useState,
    ScrollView,
    Modal,
    Platform,
} from "react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import { isIphoneX } from "react-native-iphone-x-helper";
import Icon from "react-native-vector-icons/Ionicons";
import { useStateContext } from "../context";
import { useContext } from "react";

export const LabTestsDetails = ({ route, navigation }) => {
    

    const [LabsData, setLabsData] = React.useState(null);
    const [itemsModal, setItemsModal] = React.useState(null);
    const [orderItems, setOrderItems] = React.useState([]);
    const [itemCounts, setItemCounts] = React.useState([]);
  
    const [cartData, setCartData] = React.useState([]);

    // state to hold the quantity of the item
    const [quantity, setQuantity] = React.useState(0);

    const { item } = route.params;

    // store the Labsdata in the state
    React.useEffect(() => {
        setLabsData(item);
    });

    

    // adding item to cart
    
    

   
    
    
    function renderHeader() {
        return (
            <View style={{ flexDirection: "row", marginTop: 0 }}>
                <Pressable
                    style={{
                        width: 50,
                        padding: SIZES.padding * 0,
                        paddingLeft: SIZES.padding * 2,
                        paddingRight: 0,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: "teal",
                        }}
                    />
                    {/* <Icon name="arrow-back-outline" size={35} color="teal" /> */}
                </Pressable>

                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                        }}
                    ></View>
                </View>
                <Pressable
                    style={{
                        width: 50,
                        padding: SIZES.padding * 0,
                        paddingRight: SIZES.padding * 2,
                        paddingLeft: 0,
                        justifyContent: "center",
                    }}
                >
                    {/* <Image
                        source={icons.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            paddingTop: SIZES.padding * 2, 

                        }}
                    /> */}
                    <Icon name="list" size={35} color="teal" />
                </Pressable>
            </View>
        );
    }
    function renderLabInfo() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: "white",
                }}
            >
                <View
                    style={{
                        height: "35%",
                        width: "100%",
                        borderRadius: 0,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <View style={{ width: "100%", height: "100%" }}>
                        <Image
                            resizeMode="cover"
                            source={LabsData?.photo}
                            style={{
                                height: "100%",
                                width: "100%",
                                borderRadius: 0,
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        paddingLeft: SIZES.padding,
                        paddingRight: SIZES.padding,
                    }}
                >
                    <View
                        style={{
                            height: "65%",
                            width: "100%",
                            backgroundColor: COLORS.lightGray,
                            borderTopRightRadius: 35,
                            borderTopLeftRadius: 35,
                            padding: SIZES.padding * 2,
                            paddingBottom: 20,
                            ...styles.shadow,
                            borderWidth: 0.1,
                        }}
                    >
                        <View style={{height:"7%",flexDirection:'row',alignItems:'center'}}>
                            <Image 
                                source={item.icon}
                                resizeMode="contain"
                                style={{height:'100%',width:'10%'}}
                            />
                            <Text style={{fontWeight:'bold',fontSize:SIZES.h2,lineHeight:22}}>
                                {item.name}
                            </Text>
                            
                        </View>
                        <View style={{height:'80%',}}>
                            <View style={{height:'8%',}}>
                                <Text style={{fontSize:SIZES.h4,fontWeight:'bold',lineHeight:23}}>
                                    How Lab Test Works?

                                </Text>
                            </View>
                            <View style={{height:'22%',}}>
                                <Text style={{lineHeight:23}}>
                                ●  Once you have scheduled your lab test, one of our trained workers will come to your house at the scheduled time to perform the test. 
                                </Text>

                            </View>
                            <View style={{height:'70%',}}>
                                <Text style={{lineHeight:23}}>
                                ●  Our worker will arrive at your doorstep with all the necessary <Text style={{fontWeight:'bold'}}>Equipment and Apparatus</Text> for the test which includes :
                                </Text>
                                <Text style={{lineHeight:23}}>{item.apparatus}</Text>
                                <Text style={{lineHeight:23}}>●  Please make sure that you are at home at the scheduled time and that you have provided accurate information about your address and contact details to ensure a smooth and hassle-free testing process.</Text>
                            </View>
                            

                            

                        </View>
                        <View style={{height:'13%',width:"100%"}}>
                        <   Pressable
                                onPress={()=>navigation.navigate("PatientDetails",{item})}
                                        
                                        style={{
                                            height: "100%",
                                            width: "100%",
                                            backgroundColor: "#2A8C8D",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "row",
                                            borderRadius: 20,
                                        }}
                                    >
                                       
                                        <Text
                                            style={{
                                                fontWeight: "bold",
                                                fontSize: SIZES.h3,
                                                color: "white",
                                            }}
                                        >
                                            Add Some details
                                        </Text>
                            </Pressable>

                        </View>
                       
                        
                        
                    </View>
                </View>
               

               
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderLabInfo()}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: COLORS.lightGray4,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? 40 : 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    },
});
export default LabTestsDetails;
