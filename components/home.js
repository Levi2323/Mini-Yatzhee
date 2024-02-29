import React, {useState} from 'react';
import {Modal, Text, View, Keyboard, Pressable, TextInput } from 'react-native';
import style from '../Style/style';
import Header from './header';
import Footer from './footer';
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    NBR_OF_DICES,
    NBR_OF_THROWS,
    MIN_SPOT,
    MAX_SPOT,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS, } from '../constants/Game';




export default Home = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [hasName, setHasName] = useState(false);

    const checkHasName = (value) => {
        if (value.trim() !== '') {
            setHasName(true);
            Keyboard.dismiss();
            setModalVisible(!modalVisible);
        }
    }

    const navigateToGameboard = () => {
        navigation.navigate('Gameboard', {name: name});
    }

    return (
        <View style={style.container}>
                    <Modal
                        
                        animationType= 'none'
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {setModalVisible(!modalVisible);}}
                        >
                        <View style={{flex: 1, justifyContent:'center', backgroundColor:'#56986A'}}>
                            <View style={style.modal}>
                                <Header />
                                    <MaterialCommunityIcons name='information' size={100} color='#670D41' style={{alignSelf: 'center'}}/>
                                    <Text style= {style.title}>Rules of the Game</Text>
                                    <Text style= {style.gameinfo}>
                                    THE GAME: Upper section of the classic Yahtzee dice game. You have {NBR_OF_DICES} dices and for the every dice you have {NBR_OF_THROWS} throws. After each throw you can keep dices in order to get same dice spot counts as many as possible. In the end of the turn you must select your points from {MIN_SPOT} to {MAX_SPOT}. Game ends when all points have been selected. The order for selecting those is free. </Text>
                                    <Text style= {style.gameinfo}>
                                    POINTS: After each turn game calculates the sum for the dices you selected. Only the dices having the same spot count are calculated. Inside the game you can not select same points from {MIN_SPOT} to {MAX_SPOT} again.</Text>
                                    <Text style= {style.gameinfo}>
                                    GOAL: To get points as much as possible. {BONUS_POINTS_LIMIT} points is the limit of getting bonus which gives you {BONUS_POINTS} points more.
                                    </Text>
                                    <Text style={style.nameHome}>Good Luck {name}!</Text>
                                    <Pressable
                                        style={style.button}
                                        mode='contained' 
                                        onPress={() => { navigateToGameboard(); setModalVisible(!modalVisible); }}>
                                        <Text style={style.buttonText}>Start Game</Text>
                                    </Pressable>
                                    <Footer />
                        </View>
                        </View>
                    </Modal>
                    
                    <View style={style.home}>
                        <Header />
                        <MaterialCommunityIcons name='information' size={70} color='#670D41' style={style.homeIcon}/>
                        <Text style={style.homeinfo}>For Scoreboard enter your name:</Text>
                        <TextInput 
                            style={style.textInput} 
                            placeholder='Enter your name' 
                            value= {name} 
                            onChangeText={setName}/>
                        <Pressable
                            style={style.button} 
                            mode='contained' 
                            onPress={() => checkHasName(name)}>
                            <Text style={style.buttonText}>Submit</Text>
                        </Pressable>
                        <Footer />
                    </View>  
        </View>
    )
}


