import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
// import { Compare } from "./app/components/Compare";
import { Home } from "./app/screens/Home";
import { CompareResult } from "./app/screens/CompareResult";
import Search from "./app/screens/Search";
import { Dealer } from "./app/screens/Dealer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PickCompareCar } from "./app/screens/PickCompareCar";
import { BrandFilter } from "./app/screens/BrandFilter";
import { BodyTypeFilter } from "./app/screens/BodyTypeFilter";
import { CompareCar } from "./app/screens/CompareCar";
import { CarDetails } from "./app/screens/CarDetails";
import colors from "./app/constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator
          initialRouteName="Homepage"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CompareResult" component={CompareResult} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Dealer" component={Dealer} />
          <Stack.Screen name="PickCar" component={PickCompareCar} />
          <Stack.Screen name="BrandFilter" component={BrandFilter} />
          <Stack.Screen name="BodyTypeFilter" component={BodyTypeFilter} />
          <Stack.Screen name="CompareCar" component={CompareCar} />
          <Stack.Screen name="CarDetails" component={CarDetails} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
