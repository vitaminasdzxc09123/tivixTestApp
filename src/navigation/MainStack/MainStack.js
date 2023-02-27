import React                      from 'react';
import { createStackNavigator }   from '@react-navigation/stack';

import ROUTES                     from '../../constants/Routes';

import HomeScreen                 from '../../screens/HomeScreen';
import PersonalFormScreen         from '../../screens/PersonalFormScreen';

const MainStack = createStackNavigator();

function MainStackScreen() {
    return (
        <MainStack.Navigator
            detachInactiveScreens = {false}
            screenOptions         = {{ headerShown : false }}
        >
            <MainStack.Screen
                name      = {ROUTES.HOME_SCREEN}
                component = {HomeScreen}
            />
            <MainStack.Screen
                name      = {ROUTES.PERSONAL_FORM_SCREEN}
                component = {PersonalFormScreen}
                options   = {{ presentation : 'modal'  }}
            />
        </MainStack.Navigator>
    );
}

export default React.memo(MainStackScreen);
