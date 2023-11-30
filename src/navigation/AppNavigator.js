import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import ProductDetail from '../common/ProductDetail';
import ListProducts from '../common/ListProducts';
import Main from '../bottom/Main';

import RePass from '../edit/RePass';
import HistoryBuy from '../edit/HistoryBuy';
import NewsPaperDetail from '../edit/NewsPaperDetail';
import Contact from '../bottom/Contact';
import EditProfile from '../edit/EditProfile';
import Address from '../edit/Address';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
                <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
                <Stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
                <Stack.Screen options={{headerShown: false }} name='ListProducts' component={ListProducts}/>
                <Stack.Screen options={{headerShown: false }} name='ProductDetail' component={ProductDetail}/>
                <Stack.Screen options={{headerShown: false }} name='EditProfile' component={EditProfile}/>
                <Stack.Screen options={{headerShown: false }} name='RePasswd' component={RePass}/>
                <Stack.Screen options={{headerShown: false }} name='History' component={HistoryBuy}/>
                <Stack.Screen options={{headerShown: false }} name='NewsDetail' component={NewsPaperDetail}/>
                <Stack.Screen options={{headerShown: false }} name='Contact' component={Contact}/>
                <Stack.Screen options={{headerShown: false }} name='Address' component={Address}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator