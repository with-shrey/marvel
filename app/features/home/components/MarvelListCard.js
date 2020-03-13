import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './MarvelListCardStyles';

export default function MarvelListCard(props) {
    const date = props.modified.split('T')[0];
    return(
        <View style={style.card}>
            <View style={style.imageContainer}>
                <Image source={{uri: props.thumbnail}} style={style.image} />
            </View>
            <View style={style.textContainer}>
                <Text style={style.title}>{props.name}</Text>
                <Text style={style.characterId}>{props.id}</Text>
                <Text style={style.description} numberOfLines={2}>{props.description}</Text>
                <Text style={style.dateText}>Modified: {date}</Text>
            </View>
        </View>
    );
}