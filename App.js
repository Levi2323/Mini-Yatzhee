import GameBoard from './components/gameboard';
import Home from './components/home';
import ScoreBoard from './components/Scoreboard'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
              color = focused ? '#670D41' : '#E790C2';
            } else if (route.name === 'Gameboard') {
              iconName = focused ? 'dice-multiple' : 'dice-multiple-outline';
              color = focused ? '#670D41' : '#E790C2';
            } else if (route.name === 'Scoreboard') {
              iconName = focused ? 'trophy' : 'trophy-outline';
              color = focused ? '#670D41' : '#E790C2';
            }
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })
        }
        >
        <Tab.Screen name="Home" component={Home} 
          options={{tabBarStyle: {display: "none"}, tabBarLabelStyle: {color: '#670D41'}, headerStyle: {backgroundColor: '#56986A'}}}/>
        <Tab.Screen name="Gameboard" component={GameBoard} 
          options={{tabBarStyle: {backgroundColor: '#56986A', borderTopColor: '#56986A'}, tabBarLabelStyle: {color: '#670D41'}, headerStyle: {backgroundColor: '#56986A'}}}/>
        <Tab.Screen name="Scoreboard" component={ScoreBoard} 
          options={{tabBarStyle: {backgroundColor: '#56986A', borderTopColor: '#56986A'}, tabBarLabelStyle: {color: '#670D41'}, headerStyle: {backgroundColor: '#56986A'}}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


