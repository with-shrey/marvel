import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from "react-native";
import MarvelListCard from "app/features/home/components/MarvelListCard";
import HeaderView from "app/features/home/components/Header";
import styles from "./ListStyles";
import LoadingIndicator from "app/components/LoadingIndicator";
import AsyncStorage from '@react-native-community/async-storage';
import Images from 'app/config/images';

/**
 * Component for HomeScreen View
 *
 * @component
 * @example
 *
 * Transfer all redux props to View
 * return (
 *   <HomeView  {...this.props}/>
 * )
 */
export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.flatListRef = React.createRef();
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

  // Scroll list to top when loading starts
  componentWillReceiveProps(nextProps){
    if(this.props.loadingList === false && nextProps.loadingList === true){
      this.flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <HeaderView />
        <View style={styles.listContainer}>
          <FlatList
            ref={this.flatListRef}
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
            <Image source={Images.logoutIcon} style={styles.floatingIcon}/>
        </TouchableOpacity>
      </View>
    );
  }
}
