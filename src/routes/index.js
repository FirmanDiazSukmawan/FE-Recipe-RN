/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login/Login';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import Register from '../screens/Register/Register';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailPopularMenu from '../screens/DetailPopularMenu/DetailPopularMenu';
import DetailRecipe from '../screens/DetailRecipe/DetailRecipe';
import DetailVideo from '../screens/DetailVideo/DetailVideo';
import Profile from '../screens/Profile/Profile';
import MyRecipe from '../screens/MyRecipe/MyRecipe';
import SavedRecipe from '../screens/SavedRecipe/SavedRecipe';
import LikedRecipe from '../screens/LikedRecipe/LikedRecipe';
import EditProfile from '../screens/EditProfile/EditProfile';
import AddRecipe from '../screens/AddRecipe/AddRecipe';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EditRecipe from '../screens/editRecipe/editRecipe';
import Comment from '../screens/Comment/comment';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Auth() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={Router}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailPopular"
          component={DetailPopularMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailRecipe"
          component={DetailRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailVideo"
          component={DetailVideo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyRecipe"
          component={MyRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SavedRecipe"
          component={SavedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LikedRecipe"
          component={LikedRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditRecipe"
          component={EditRecipe}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Comment"
          component={Comment}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => (
            <Feather name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="AddRecipe"
        component={AddRecipe}
        options={{
          title: 'Add Recipe',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="add-circle-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default Auth;
