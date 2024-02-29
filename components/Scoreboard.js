import React from 'react';
import {ScrollView, Text, View } from 'react-native';
import style from '../Style/style';
import Header from './header';
import Footer from './footer';
import { SCOREBOARD_KEY } from '../constants/Game';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ScoreBoard({navigation, route}) {

    const [records, setRecords] = useState([]);

    const sortedRecords = records.sort((a, b) => b.points - a.points);

    const top7Records = sortedRecords.slice(0, 7);

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(SCOREBOARD_KEY, jsonValue);
        } catch (e) {
            console.log(e);
        } }

    const getData = async () => {
        try {
            return AsyncStorage.getItem(SCOREBOARD_KEY)
            .then (req => JSON.parse(req))
            .then (json => {
                if (json === null) {
                    json = [];
                }
                setRecords(json);
            })
            .catch (error => console.log(error));
        } catch (e) {
            console.log(e);
        } }


    useEffect(() => {
        if (route.params?.name && route.params?.sum) {
            const newKey = records.length + 1;
            const newRecord = {key: newKey.toString(), name: route.params?.name, date: new Date().toLocaleString(), points: route.params?.sum};
            const newRecords = [...records, newRecord];

            storeData(newRecords);
        }
        getData();
    }, [route.params?.name, route.params?.sum]);

    return (
            <View style={style.scoreboard}>
                <Header />
                <Text style={style.scoreboardTitle}>Scoreboard</Text>
                <MaterialCommunityIcons name='trophy' size={80} color='#670D41' style={{alignSelf: 'center'}}/>
                <Text style={style.scoreboardTitle}>Top {top7Records.length}</Text>
                <ScrollView>
                    {top7Records.map((record, index) => (
                        <View key={record.key} style={style.scoreboardList}>
                            <Text style={style.scoreboardIndex}>{index + 1}.  </Text>
                            <Text style={style.scoreboardName}>{record.name}  on  </Text>
                            <Text style={style.scoreboardDate}>{record.date}  with  </Text>
                            <Text style={style.scoreboardPoints}>{record.points} P</Text>
                        </View>
                    ))}
                </ScrollView>
                <Button style={style.scoreboardButton} mode='contained' 
                    onPress={() => {AsyncStorage.removeItem(SCOREBOARD_KEY);
                    navigation.navigate('Scoreboard', {name: '', sum:''});}}>
                        Clear Scoreboard
                </Button>
                <Footer />
            </View>     
    )
}