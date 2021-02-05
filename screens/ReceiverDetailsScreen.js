import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native' // not done
import {Card} from 'react-native-elements' // not done
import firebase from 'firebase'
import db from '../config'

export default class ReceiverDetailsScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userId: firebase.auth().currentUser.email,
            receiverId: this.props.navigation.getParam('details')['user_id'],
            requestId: this.props.navigation.getParam('details')['request_id'],
            bookName: this.props.navigation.getParam('details')['book_name'],
            reasonForRequesting: this.props.navigation.getParam('details')['reason_to_request'],
            receiverName: '',
            receiverContact: '',
            receiverAddress: '',
            receiverRequestDocId:'',
        }
    }

    getReceiverDetails(){
        db.collection('users').where('email_id', '==', this.state.receiverId).get().then(
            snapshot => {
                snapshot.forEach(doc => {
                    this.setState({
                        receiverName: doc.data().first_name,
                        receiverContact: doc.data().contact,
                        receiverAddress: doc.data().address,
                    })
                })
            }
        )
        //db.collection('') 36-50 not done
        db.collection('requested_books').where('request_id','==',this.state.requestId).get()
        .then(snapshot=>{
            snapshot.forEach(doc => {
            this.setState({recieverRequestDocId:doc.id})
        })
        })
    }

        updateBookStatus=()=>{
        db.collection('all_donations').add({
            book_name           : this.state.bookName,
            request_id          : this.state.requestId,
            requested_by        : this.state.receiverName,
            donor_id            : this.state.userId,
            request_status      :  "Donor Interested"
        })
    }
    componentDidMount(){
        this.getReceiverDetails()
        console.log("hello3")
      }
    render(){
        console.log("hello1")
        return(
           
            <View>
                <View>
                    <Card>
                        <Text style = {{fontWeight: 'bold'}}>
                            Name: {this.state.receiverName}
                        </Text>
                    </Card>

                    <Card>
                        <Text style = {{fontWeight: 'bold'}}>
                            Contact: {this.state.receiverContact}
                        </Text>
                    </Card>

                    <Card>
                        <Text style = {{fontWeight: 'bold'}}>
                            Address: {this.state.receiverContact}
                        </Text>
                    </Card>
                </View>

                <View>
                    {this.state.receiverId !== this.state.userId
                    ? (<TouchableOpacity  style={styles.button}
                        onPress={()=>{
                          this.updateBookStatus()
                          this.props.navigation.navigate('MyDonations')
                        }}>
                        <Text>
                            I want to donate.
                        </Text>
                      </TouchableOpacity>
                      ) : null
                    }
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    buttonContainer : {
      flex:0.3,
      justifyContent:'center',
      alignItems:'center'
    },
    button:{
      width:200,
      height:50,
      justifyContent:'center',
      alignItems : 'center',
      borderRadius: 10,
      backgroundColor: 'orange',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8
       },
      elevation : 16
    }
  })
  