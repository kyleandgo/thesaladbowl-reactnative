import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ProteinScreen from './screens/ProteinScreen';
import SauceScreen from './screens/SauceScreen';
import GreensScreen from './screens/GreensScreen';
import UserInfoScreen from './screens/UserInfoScreen';
import UserDetailsScreen from './screens/UserDetailsScreen';
import ThankYouScreen from './screens/ThankYouScreen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const OrderStack = createStackNavigator();
const ProteinStack = createStackNavigator();
const SauceStack = createStackNavigator();
const GreensStack = createStackNavigator();
const UserInfoStack = createStackNavigator();
const UserDetailsStack = createStackNavigator();
const ThankYouStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="the salad bowl"
      component={HomeScreen}
      options={{
        title: 'the salad bowl',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const OrderStackScreen = ({navigation}) => (
  <OrderStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <OrderStack.Screen
      name="the salad bowl"
      component={OrderScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </OrderStack.Navigator>
);

const ProteinStackScreen = ({navigation}) => (
  <ProteinStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProteinStack.Screen
      name="the salad bowl"
      component={ProteinScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ProteinStack.Navigator>
);

const SauceStackScreen = ({navigation}) => (
  <SauceStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SauceStack.Screen
      name="the salad bowl"
      component={SauceScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </SauceStack.Navigator>
);

const GreensStackScreen = ({navigation}) => (
  <GreensStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <GreensStack.Screen
      name="the salad bowl"
      component={GreensScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </GreensStack.Navigator>
);

const UserInfoStackScreen = ({navigation}) => (
  <UserInfoStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <UserInfoStack.Screen
      name="the salad bowl"
      component={UserInfoScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </UserInfoStack.Navigator>
);

const UserDetailsStackScreen = ({navigation}) => (
  <UserDetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <UserDetailsStack.Screen
      name="the salad bowl"
      component={UserDetailsScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </UserDetailsStack.Navigator>
);

const ThankYouStackScreen = ({navigation}) => (
  <ThankYouStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#FF9432',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ThankYouStack.Screen
      name="the salad bowl"
      component={ThankYouScreen}
      options={{
        title: 'Make your own salad',
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={26}
            backgroundColor="#FF9432"
            onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
      }}
    />
  </ThankYouStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Order" component={OrderStackScreen} />
        <Drawer.Screen name="Protein" component={ProteinStackScreen} />
        <Drawer.Screen name="Sauce" component={SauceStackScreen} />
        <Drawer.Screen name="Greens" component={GreensStackScreen} />
        <Drawer.Screen name="UserInfo" component={UserInfoStackScreen} />
        <Drawer.Screen name="UserDetails" component={UserDetailsStackScreen} />
        <Drawer.Screen name="ThankYou" component={ThankYouStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
