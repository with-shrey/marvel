import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import MarvelListCard from "app/features/home/components/MarvelListCard";
import HeaderView from "app/features/home/components/Header";
import styles from "./ListStyles";
import LoadingIndicator from "app/components/LoadingIndicator";
import LogoutIcon from 'app/assets/icons/logout.png'
import AsyncStorage from '@react-native-community/async-storage';
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logoutUser = async() => {
    Alert.alert(
      'Logout',
      'Are you sure ?',
      [
        {text: 'OK', onPress: async () => {
          await AsyncStorage.removeItem('token');
          this.props.navigation.navigate('Auth');
        }},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderView />
        <View style={styles.listContainer}>

          <FlatList
            data={this.props.list}
            renderItem={({ item }) => (
              <MarvelListCard key={item.id} {...item} />
            )}
            contentContainerStyle={styles.flatListContainer}
            keyExtractor={character => "" + character.id}
          />
        </View>
        {this.props.loadingList && <LoadingIndicator />}
        <TouchableOpacity
            style={styles.floatingButton}
            onPress={() => this.logoutUser()}
        >
            <View style={styles.floatingButtonBG}></View>
            <Image source={LogoutIcon} style={styles.floatingIcon}/>
        </TouchableOpacity>
      </View>
    );
  }
}
