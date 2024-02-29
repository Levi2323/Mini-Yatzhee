import {Text, View } from 'react-native';
import style from '../Style/style';

export default Header = () => {
    return (
        <View style={style.footer}>
            <Text style={style.author}>By Levi Vogt</Text>
        </View>
    )
}