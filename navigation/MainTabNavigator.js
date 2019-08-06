import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Screen1 from '../screens/Screen1';
import ExploreScreen from '../screens/Explore';
import AddBookScreen from '../screens/AddBook';
import ListsScreen from '../screens/Lists';
import EditBookScreen from '../screens/EditBook';
import BookcaseItem from '../screens/BookcaseItem';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Screen1: Screen1,
    EditBookScreen: EditBookScreen,
    BookcaseItem: BookcaseItem,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Bookshelf',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-bookmarks${focused ? '' : '-outline'}`
          : 'md-bookmarks'
      }
      
    />
  ),
};

HomeStack.path = '';

const ExploreStack = createStackNavigator(
  {
    Explore: ExploreScreen,
  },
  config
);

ExploreStack.navigationOptions = {
  tabBarLabel: 'Explore',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map-outline' : 'ios-map'} />
  ),
};

ExploreStack.path = '';

const AddBookStack = createStackNavigator(
  {
    AddBook: AddBookScreen,
  },
  config
);

AddBookStack.navigationOptions = {
  tabBarLabel: 'Add Book',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add-circle-outline' : 'ios-add-circle-outline'} />
  ),
};

AddBookStack.path = '';

const ListsStack = createStackNavigator(
  {
    ListsExplore: ListsScreen,
  },
  config
);

ListsStack.navigationOptions = {
  tabBarLabel: 'Lists',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map-outline' : 'ios-map'} />
  ),
};

ListsStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

ProfileStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ExploreStack,
  AddBookStack,
  ListsStack,
  ProfileStack,
});

tabNavigator.path = '';

export default tabNavigator;
