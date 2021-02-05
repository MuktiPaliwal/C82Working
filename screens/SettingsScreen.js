import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Alert, Image, Modal, ScrollView } from 'react-native';
//import MyHeader from '../components/myHeader'
import db from '../config'
import firebase from 'firebase'

export default class SettingsScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Settings Screen
                </Text>
            </View>
        )
    }
}