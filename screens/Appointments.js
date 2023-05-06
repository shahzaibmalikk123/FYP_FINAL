import React, { useEffect } from "react";
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
    ScrollView,
    Modal,
    Platform,
} from "react-native";
import axios, { Axios } from "axios";
import { COLORS, icons, SIZES, images, FONTS } from "../constants";
import axiosInstance from "../axios/axiosInstance";
import { PracticeProvider, ContextP } from "../context";
import { useStateContext } from "../context";

export const Appointments=({ route, navigation })=>{
    
    const [appointmentList, setAppointmentList] = React.useState([]);
    const { appointments } = route.params;
    const { findUser,currentUser } = useStateContext();
    const [matchedUser, setMatchedUser]= React.useState({})
    React.useEffect(() => {
        // const getAppointments = async () =>{
        //   try{
        //     const response = await axiosInstance.get("appointments/populate");
        //     console.log(response.data[1])
        //     setAppointmentList(response.data)
            
        //   }
        //   catch(error){
        //     console.log(error);

        //   }
        // };
        const userAppointments = async () => {
          try{
            console.log(currentUser.email)
            const user = await findUser(currentUser.email)
            setMatchedUser(user)
            console.log("Matched User: ", matchedUser);
          }
          catch(error){
            console.log(error)

          }
          
        }
        userAppointments();
    }, []);
    

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>My Appointments</Text>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {appointmentList.map((appointment, index) => (
              <View key={appointment._id} style={styles.appointmentContainer}>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Appointment ID</Text>
                  <Text style={styles.value}>{appointment?.appointment_id}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Doctor name</Text>
                  <Text style={styles.value}>{appointment?.doctor_id?.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Patient name</Text>
                  <Text style={styles.value}>{appointment?.patient_id?.name}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title} numberOfLines={1}>Date</Text>
                  <Text style={styles.value}>{appointment?.date}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Time</Text>
                  <Text style={styles.value}>{appointment?.time}</Text>
                </View>
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>Status</Text>
                  <Text style={[styles.value, { color: "red" }]}>
                    {appointment?.status}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,
      },
      heading: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color:'teal'
      },
      scrollContainer: {
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding,
      },
      appointmentContainer: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.radius,
        padding: SIZES.padding,
        marginBottom: SIZES.padding,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        
      },
      infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SIZES.base,
        flexWrap: 'wrap',
      },
      title: {
        ...FONTS.h3,
        color: COLORS.gray,
        fontWeight:'bold'
      },
      value: {
        ...FONTS.h3,
        color: COLORS.black,
      },
    });
    
    export default Appointments;