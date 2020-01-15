import React , {Component} from 'react';
import { View, Fragment, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import config from "../config";
import { PostFeed } from '../components/container';
import Icon from 'react-native-vector-icons/';
import {createAppContainer} from 'react-navigation';  
import { createStackNavigator } from 'react-navigation-stack';
import ActionButton from 'react-native-action-button';




class MainFeedPage extends Component {
     constructor(props) {
    super(props)

    this.state = {

    }
} 
    render(){
        return(
            <View style = {{flex:1, width:100 + "%", height: 100 + "%", backgroundColor:'black'}}>
                <View style = {styles.tempNav}> 
                     <Text style = {styles.headerText}> Oppunity</Text>
                    </View>

                     <PostFeed/>


<ActionButton buttonColor="rgba(231,76,60,1)"
        position = 'center'
        bgColor = 'black'
        
        
         >


          <ActionButton.Item 
          buttonColor='blue' 
          
         
          onPress={() => this.props.navigation.navigate('UserProfilePage') }>

            <Icon name="ios-contact" style={styles.actionButtonIcon} />

            </ActionButton.Item>

          <ActionButton.Item 
          buttonColor='blue' 
         
           onPress={() => this.props.navigation.navigate('NotificationsPage') }>

            <Icon name="md-notifications" style={styles.actionButtonIcon} />
          </ActionButton.Item>


          <ActionButton.Item buttonColor='blue'  onPress={() => console.log("Search Pressed!")}>
            <Icon name="ios-search" style={styles.actionButtonIcon} />
          </ActionButton.Item>

        
        
          <ActionButton.Item buttonColor='blue'  onPress={() => console.log("Upload Pressed!")}>
            <Icon name="md-cloud-upload" style={styles.actionButtonIcon} />
          </ActionButton.Item>


          <ActionButton.Item buttonColor='blue' onPress={() => console.log("Settings Pressed!")}>
            <Icon name="md-settings" style={styles.actionButtonIcon} />
          </ActionButton.Item>


        </ActionButton>
        
      </View>
    );
  }
 
} 






export default MainFeedPage; 


const styles = StyleSheet.create({
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  

  actionButtonPlacement: {
    borderWidth: 1,
    borderColor: 'white',
    height: 80,
    width: 80,
    bottom: 20
  },

    tempNav: {
        width: 100 + "%",
        height: 56,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101011',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    headerText: {
        color: 'white',
        fontSize: 20,
        textAlign: "center",
        marginTop: 10
    },

  
});



