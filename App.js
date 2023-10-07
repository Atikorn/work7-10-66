import react from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlatListDemo from './flatlist-demo2';
import Detail from './detail'

export default function App() {
  const Stack = createStackNavigator()
  return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='FlatListDemo'>
                <Stack.Screen name="FlatListDemo" component={FlatListDemo}
                options={{headerTitle:'Home', headerBackTitle:'' }}/> 
                <Stack.Screen name="Detail" component={Detail}
                options={{headerTitle:'Detail', headerBackTitle:'' }}/> 
            </Stack.Navigator>
        </NavigationContainer>
  );
}
