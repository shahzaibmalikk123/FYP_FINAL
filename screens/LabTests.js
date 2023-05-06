import React from "react";
//import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    FlatList,
    StyleSheet,
    ImageBackground,
    useState,
    ScrollView,
} from "react-native";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import { useFonts } from "expo-font";
import { PracticeProvider, ContextP } from "../context";
import { useStateContext } from "../context";

export const LabTests = ({ navigation }) => {
    const { LabsData, setLabsData } = useStateContext();
    function CloseHome() {
        setShowHomePage(true);
    }

    const categoryData = [
        {
            id: 1,
            name: "Corona Test",
            icon: icons.coronavirus,
            description:'hey it is given the description of corona test and it is about most trending disease.',
            price:"$13.00",
            photo:images.coronatest,
            apparatus:"(i) Thermocycler (ii) Nucliec acid extraction kit  (iii) PCR assay kit (iv) Lancet"
        },
        {
            id: 2,
            name: "Cancer Checkup",
            icon: icons.cancer,
            description:'Cancer is a disease which has uncontrolled growth of abnormal cells in the body. ',
            price:"$23.00",
            photo:images.cancer,
            apparatus:"(i)X-ray machine (ii)MRI scanner  (iii) Needle biosy device  (iv)Endoscope  (v)ElSA  (vi)PCR"
        },
        {
            id: 3,
            name: "Diabetes Test",
            icon: icons.diabetes,
            description:'Diabetes is a chronic condition that affects how the body uses blood sugar for energy. ',
            price:"$23.00",
            photo:images.diabetes,
            apparatus:"(i)Glucometer (ii)Continuous glucose monitoring(CGM) system  (iii) Insulin pump  "
        },
        {
            id: 4,
            name: "Blood Test",
            icon: icons.blood,
            description:'A blood test is a medical procedure that involves drawing blood from a patients vein.',
            price:"$13.00",
            photo:images.bloodtest,
            apparatus:"(i)Phlebotomy kit (ii)Point-of-care(POC) testing devices  (iii)Laboratory-on-a-chip devices  "
        },
        {
            id: 5,
            name: "Blood clotting test",
            icon: icons.bloodclotting,
            description:'Blood clottingprocess in which blood forms a gel-like clot to stop bleeding after an injury.',
            price:"$13.00",
            photo:images.bloodclotting,
            apparatus:"(i) CoaguCheck (ii) Hemochron  (iii) Point-of-care(POC) coagulation meter "
        },
        
    ];
    // price rating
    const poor = 2;
    const average = 3.5;
    const veryGood = 5;

    const [categories, setCategories] = React.useState(categoryData);
    const [selectedCategory, setSelectedCategory] = React.useState(" ");
    const [medicines, setMedicines] = React.useState(LabsData);
    function onSelectCategory(category) {
        //let medicineList = medicineData.filter( a => a.categories.includes(category.id))
        //setMedicines(medicineList)
        setSelectedCategory(category);
    }

    let fontsLoaded;
    fontsLoaded = useFonts({
        "OpenSans-Bold": require("../assets/fonts/OpenSans-Bold.ttf"),
    });
    function renderHeader() {
        return (
            <View
                style={{
                    height: 50,
                    flexDirection: "row",
                }}
            >
                <Pressable
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => {
                        CloseHome;
                    }}
                >
                    <Image
                        source={icons.side_bar}
                        resizeMode="contain"
                        style={{ width: 30, height: 30, tintColor: "teal" }}
                    />
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
                            height: "80%",
                            width: "70%",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: COLORS.lightGray,
                            borderRadius: SIZES.radius,
                        }}
                    >
                        <Text
                            style={{
                                color: "teal",
                                fontSize: SIZES.h4,
                                fontWeight: "bold",
                            }}
                        ></Text>
                    </View>
                </View>
                <Pressable
                    onPress={() => navigation.navigate("Search")}
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        source={icons.search_2}
                        resizeMode="contain"
                        resizeMethod="resize"
                        style={{ width: 30, height: 30, tintColor: "teal" }}
                    />
                </Pressable>
            </View>
        );
    }
    function renderMedPic() {
        return (
            <View
                style={{
                    width: "100%",
                    height: "40%",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignContent: "center",
                    paddingTop: 0,
                }}
            >
                <Pressable
                    style={{ padding: SIZES.padding * 2, paddingBottom: 0 }}
                >
                    <Image
                        style={{
                            width: "100%",
                            height: "80%",
                            borderRadius: 30,
                        }}
                        resizeMode="cover"
                        source={images.labtest4}
                    />
                </Pressable>
                <View
                    style={{
                        position: "absolute",
                        width: "40%",
                        height: "56%",
                        left: 60,
                        bottom: 60,
                        top: 40,
                        flexWrap: "wrap",
                        
                    }}
                >
                    <View>
                        <Text style={{fontWeight:'800',fontSize:SIZES.h2}}>
                            SAVE UP
                        </Text>
                        
                    </View>
                    <View
                        style={{
                            padding: SIZES.padding * 0,
                            flexDirection: "column",
                        }}
                    >
                        <Text
                            style={{
                                fontWeight: "800",
                                fontSize: SIZES.h5,
                                color: "teal",
                                paddingBottom: 0,
                            }}
                        >
                            Get 10% Off On Checkups
                        </Text>
                        <Text style={{paddingBottom:10}}>
                            on all tests and packages
                        </Text>
                        
                        <Pressable
                            style={{
                                height: "35%",
                                backgroundColor: "#F0846D",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "70%",
                                paddingHorizontal: 10,
                                borderRadius: 10,
                            }}
                        >
                            <Text
                                style={{ fontWeight: "bold", color: "white" }}
                            >
                                Read More
                            </Text>
                        </Pressable>
                    </View>
                </View>

                <View
                    style={{
                        paddingLeft: SIZES.padding * 2,
                    }}
                >
                    <Text style={{ fontWeight: "bold", fontSize: SIZES.h2 }}>
                        Top Diagnostic tests                    </Text>
                </View>
            </View>
        );
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                
                <View
                    style={{
                        padding: SIZES.padding *1 ,
                        marginTop: 10,
                        //paddingLeft: SIZES.padding * 0.5,
                        flex: 1,
                        backgroundColor:'white',
                        alignItems:'center',
                        //backgroundColor:(selectedCategory?.id == item.id) ? COLORS.teel : COLORS.lightGray,
                        
                        borderRadius: 20,
                        
                        
                        marginRight: SIZES.padding,
                        ...styles.shadow,
                        flexDirection: "column",
                        width: 230,
                        height: "100%",
                        flexWrap: "wrap",
                    }}
                    //onPress={() => onSelectCategory(item)}
                >
                    <View style={{height:'33%',width:'100%',paddingLeft:0,justifyContent:'center',}}>
                        <View>
                            <Image
                                source={item.icon}
                                resizeMode="contain"
                                style={{ width: "100%", height: "90%" }}
                            />
                        </View>
                        

                    </View>

                    <View style={{height:'36%', width:'100%',flexDirection:'column',paddingVertical:5,}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h3}}>
                            {item.name}
                        </Text>
                        <Text style={{lineHeight:18}}>
                            {item.description}
                        </Text>
                        

                    </View>
                    <View style={{height:'14%', width:'100%',}}>
                        <Text style={{fontWeight:'bold',fontSize:SIZES.h4}}>
                            {item.price}
                        </Text>

                    </View>
                    <Pressable
                        onPress={() =>
                            navigation.navigate("LabTestsDetails", {
                                item,
                            })
                        }
                    
                        style={{height:'17%', width:'100%',backgroundColor:'teal',alignItems:'center',justifyContent:'center',borderRadius:10}}>
                        <Text style={{fontWeight:'700',color:'white'}}>Book now</Text>
                    </Pressable>
                    
                </View>
                
            );
        };
        return (
            <View
                style={{
                    padding: SIZES.padding * 2,
                    paddingTop: 0,
                    paddingBottom: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    height: "45%",
                    
                }}
            >
                <FlatList
                    data={categoryData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{
                        paddingVertical: SIZES.padding * 1.5,
                        paddingTop: 0,
                    }}
                />
                
            </View>
        );
    }
    
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMedPic()}
            {renderMainCategories()}
            {/* {renderMedicines()} */}
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: COLORS.lightGray4,
        backgroundColor: COLORS.lightGray,
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

export default LabTests;
