import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './HeaderStyle';
import RefreshIcon from 'app/assets/icons/refresh.png'
import { connect } from 'react-redux';
import { requestList } from "../actions";

/**
 * Component for CharacterListScreen Header
 *
 * @component
 * @example
 *
 * return (
 *   <Header/>
 * )
 */
function Header(props) {
    return(
        <View style={style.container}>
            <Text style={style.title}>Marvel Characters</Text>
            <TouchableOpacity
                onPress={() => props.requestList()}
            >
                <Image style={style.icon} source={RefreshIcon}/>
            </TouchableOpacity>
        </View>
    );
}


export default connect(null, { requestList })(Header)