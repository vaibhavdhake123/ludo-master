import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LudoboardScreen from '../screen/LudoboardScreen';
import HomeScreen from '../screen/HomeScreen';
import SplashScreen from '../screen/SplashScreen';
import { navigationRef } from '../helper/NavigationUtil';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
      initialRouteName='LudoBoardScreen'
      screenOptions={()=>({
        headerShown:false
      })}>
        <Stack.Screen
          name="LudoBoardScreen"
          options={{
            animation: 'fade',
          }}
          component={LudoboardScreen}
        />

        <Stack.Screen
          name="HomeScreen"
          options={{
            animation: 'fade',
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          name="SplashScreen"
          options={{
            animation: 'fade',
          }}
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
