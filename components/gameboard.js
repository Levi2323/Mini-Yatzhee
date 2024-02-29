import React, { useState, useEffect } from "react";
import { Text, View, Pressable, Alert } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import style from "../Style/style";
import Header from "./header";
import Footer from "./footer";
import { useNavigation } from "@react-navigation/native";
import {
    NBR_OF_DICES,
    NBR_OF_THROWS,
    BONUS_POINTS_LIMIT,
    BONUS_POINTS,
} from "../constants/Game";




let board = [];
let nbrSum = [0, 0, 0, 0, 0, 0, 0];
let selectDicePossible = false;
let selectNumberPossible = false;
let throwDicesPossible = false;
let bonusReceived = false;
let gameOver = false;

export default GameBoard = ({route}) => {

    const [nbrOfThrowsLefts, setNbrOfThrowsLefts] = useState(NBR_OF_THROWS);
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [selectedNbr, setSelectedNbr] = useState(new Array(6).fill(0));
    const [status, setStatus] = useState("");
    const [sum, setSum] = useState(0);
    const [newSum, setNewSum] = useState();

    const navigation = useNavigation();
    const name = route.params?.name;

    const rowDices = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
        rowDices.push(
            <Pressable key={"row" + i} onPress={() => selectDice(i)}>
                <MaterialCommunityIcons name={board[i]} key={"row" + i} size={65} color={getDiceColor(i)} />
            </Pressable>
        );
    }

    const rowNumbers = [];
        for (let i = 0; i < selectedNbr.length; i++) {
            rowNumbers.push(
                <Pressable key={"numeric-"+(i + 1)+"-circle"} onPress={() => selectNumber(i)}>
                    <Text style={style.gameboardText}>{nbrSum[i]}</Text>
                    <MaterialCommunityIcons name={'numeric-' + (i + 1) + '-circle'} key={"numeric-"+(i + 1)+"-circle"} size={50} color={getNumberColor(i)} />
                </Pressable>
            );
    }

    const selectDice = (i) => {
        if (selectDicePossible) {
            let dices = [...selectedDices];
            dices[i] = !dices[i];
            setSelectedDices(dices);  
        }   
    }
    
    const selectNumber = (i) => {
            let numbers = [...selectedNbr];
            if (selectNumberPossible) {
                if (!selectedNbr[i]) {
                    numbers[i] = true;
                    setSelectedNbr(numbers);
                    var temporarySum = 0;
                    for (let x = 0; x < rowDices.length; x++) {
                        var diceVal = parseInt(board[x].match(/(\d+)/)[0]); 
                        if (diceVal - 1 == i) {
                            temporarySum += diceVal;
                        }
                    }
                    nbrSum[i] = temporarySum;
                    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
                    setSum(sum + parseInt(temporarySum));
                    setNbrOfThrowsLefts(3);

                } else {
                    Alert.alert("This number is already selected.");
                }
            } else {
                Alert.alert("You need to start the round before you can select a number");
            }
        
    }

    const throwDices = () => {
        if (name === undefined || name === "") {
            Alert.alert('Please enter your name');
            navigation.navigate('Home');
        }

        else {
            if (gameOver) {
                Alert.alert('Game is over');
            }
            else if (throwDicesPossible) {
                for (let i = 0; i < NBR_OF_DICES; i++) {
                    if (!selectedDices[i]) {
                        let randomNumber = Math.floor(Math.random() * 6) + 1;
                        board[i] = 'dice-' + randomNumber;
                    }
                }
                setNbrOfThrowsLefts(nbrOfThrowsLefts - 1);
            }
            else {
                Alert.alert('Please select a number');
            }
        }
    }
        
    useEffect(() => {
        if (nbrOfThrowsLefts === 0) {
            throwDicesPossible = false;
            selectNumberPossible = true;
            setStatus('Select a number');
        } else if (nbrOfThrowsLefts < NBR_OF_THROWS) {
            throwDicesPossible = true;
            selectNumberPossible = true;
            selectDicePossible = true;
            setStatus('Throw again or select a number');
        } else if (nbrOfThrowsLefts === NBR_OF_THROWS && !selectedNbr.every(x => x === true)) {
            throwDicesPossible = true;
            selectNumberPossible = false;
            selectDicePossible = false;
            setStatus('Throw the dices');
        } else if (nbrOfThrowsLefts === NBR_OF_THROWS && selectedNbr.every(x => x === true)) { 
            throwDicesPossible = false;
            selectDicePossible = false;
            selectNumberPossible = false;
            gameOver = true;
            setStatus('Game over! All points selected');
        }
    }, [nbrOfThrowsLefts]);

    useEffect(() => {
        setNewSum(calculateSum());
    }, [sum]);

    useEffect(() => {
        if (route.params?.name) {
            setNbrOfThrowsLefts(NBR_OF_THROWS);
            setSelectedDices(new Array(NBR_OF_DICES).fill(false));
            setSelectedNbr(new Array(6).fill(0));
            setStatus("Start playing!");
            setSum(0);
            bonusReceived = false;
            gameOver = false;
            nbrSum = [0, 0, 0, 0, 0, 0, 0];
            selectDicePossible = false;
            selectNumberPossible = false;
            throwDicesPossible = true;
        }}, [route.params?.name]);

    
    function getDiceColor(i) {
        if (board.every((val, i, arr) => val === arr[0])) {
            return '#56986A';
            
        }
        else {
            return selectedDices[i] ? "#670D41" : "#E790C2";
        }
    }

    function getNumberColor(i) {
        return selectedNbr[i] ? "#670D41" : "#E790C2";
    }

    function bonus() {
        if (sum >= BONUS_POINTS_LIMIT) {
            bonusReceived = true;
            return (String(BONUS_POINTS)) + " Bonus points received!";
        }
        else {
            return (String(BONUS_POINTS_LIMIT - sum)) + " points missing to receive bonus points";
        }
    }

    function calculateSum() {
        if (bonusReceived) {
            return sum + BONUS_POINTS;
        }
        else {
            return sum;
        }
    }

    function resetGame() {
        navigation.navigate('Scoreboard', {name: name, sum: newSum});
        setNbrOfThrowsLefts(NBR_OF_THROWS);
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        setSelectedNbr(new Array(6).fill(0));
        setStatus("Start playing!");
        setSum(0);
        bonusReceived = false;
        gameOver = false;
        nbrSum = [0, 0, 0, 0, 0, 0, 0];
        selectDicePossible = false;
        selectNumberPossible = false;
        throwDicesPossible = true;
    }   

    return (
            
        <View style={style.gameboard}>
            <Header />
            {board.length === 0
                ? <MaterialCommunityIcons name='dice-multiple' size={80} color='#E790C2'/>
                : <View style={style.dices}>{rowDices}</View>
            }
            <Text style={style.gameboardText}>Throws left: {nbrOfThrowsLefts}</Text>
            <Text style={style.gameboardText}>{status}</Text>
            <Pressable 
                style={style.gameboardbutton} 
                mode='contained' 
                onPress={throwDices}>
                <Text style={style.buttonText}>Throw dices</Text>
            </Pressable>
            <Pressable 
                style={style.gameboardbutton}
                mode='contained' 
                onPress={resetGame}> 
                <Text style={style.buttonText}>{selectedNbr.every(x => x === true) ? 'Start new game' : 'Reset game'}</Text>
            </Pressable>
            <View>
                <Text style={style.pointsText}>Total Points: {calculateSum()} </Text>
                <Text style={style.gameboardText2}>{bonus()}</Text>
            </View>
            <View style={style.flex}>{rowNumbers}</View> 
            <Text style={style.nameGameboard}>Player: {name}</Text>
            <Footer />
        </View>
        )
    }