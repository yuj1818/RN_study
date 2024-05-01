import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoriteScreen from './screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// function DrawerNavigator() {
//   return <Drawer.Navigator>
//     <Drawer.Screen name="Categories" component={CategoriesScreen} />
//     <Drawer.Screen name="Favorites" component={FavoriteScreen} />
//   </Drawer.Navigator>
// }

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351401' },
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#3f2f25'}
        }}>
          <Stack.Screen 
            name="Categories" 
            component={CategoriesScreen} 
            options={{
              title: 'All Categories',
            }} 
          />
          <Stack.Screen 
            name="MealsOverview" 
            component={MealsOverviewScreen} 
            // options={({route, navigation}) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
          <Stack.Screen 
            name="MealDetail" 
            component={MealDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
