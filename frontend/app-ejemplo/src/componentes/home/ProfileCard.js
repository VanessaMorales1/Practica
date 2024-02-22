import React from "react";
import {View, Text, StyleSheet, Image, Linking,TouchableWithoutFeedback} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const snapchat = <Icon name={'snapchat-ghost'} size={30} color={'black'}/>
const pinterest = <Icon name={'pinterest'} size={30} color={'black'}/>
const whatsapp = <Icon name={'whatsapp'} size={30} color={'black'}/>
const youtube = <Icon name={'youtube'} size={30} color={'black'}/>

const ProfileCard = () => {
    const user = {

        avatar: 'https://z-p3-scontent.fuio11-1.fna.fbcdn.net/v/t39.30808-6/246786499_4536474603085002_5754870727018764835_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGp1FjP8ZNit8tItQUfVDfMFqMNMCZogKMWow0wJmiAo-85BYQqda9La-Jrm_aKPqfeCNuQbbVgklhbekAysgVW&_nc_ohc=gJNJiJLwkg8AX8wo1J5&_nc_zt=23&_nc_ht=z-p3-scontent.fuio11-1.fna&oh=00_AfBphAQW7Mbjb_hpyy_mBD-ar8ES6XugFxPKm4l4U3f0sQ&oe=65DB92A2',
        coverPhoto: 'https://images.unsplash.com/photo-1707682689100-327ab825a40e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: "Vanessa Morales"
    }
    return (
        <View style={styles.container}>
            <Image source={{uri: user.coverPhoto}} style={styles.coverPhoto}/>
            <View style={styles.avatarContainer}>
                <Image source={{uri: user.avatar}} style={styles.avatar}/>
                <Text style={styles.name}>
                    {user.name}
                </Text>
            </View>
            <View style={styles.buttonContainer}>

                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.snapchat.com//')
                }}>
                    {snapchat}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://www.pinterest.com/')
                }}>
                    {pinterest}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={{color: 'blue'}} onPress={() => {
                    Linking.openURL('https://web.whatsapp.com/')
                }}>
                    {whatsapp}
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.youtube.com/')}>
                    {youtube}
                </TouchableWithoutFeedback>
       
                
                <TouchableWithoutFeedback onPress={()=>Linking.openURL('https://www.kwai.com/es')}>
                   <Image source={require('../../../Imagen/kwai.png')} style={styles.icono}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center' //flex y grid
    },
    coverPhoto: {
        width: '100%',
        height: 200,
       // resizeMode: 'cover'

    },
    icono:{

        width: 40,
        height: 40,
    },

    avatarContainer: {
        alignItems: 'center',
        marginTop: -75
    },
    avatar: {
        width: 150,
        height: 200,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: 'white'
    },
    name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
        width: '60%',
        justifyContent: 'space-between'
    }
});
export default ProfileCard