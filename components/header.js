import {Text, View } from 'react-native';
import style from '../Style/style';

export default Header = () => {
    return (
        <View style={style.header}>
            <Text style={style.titleHeader}>Mini-Yathzee</Text>
        </View>
    )
}