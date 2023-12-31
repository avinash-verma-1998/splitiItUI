import { StyleSheet, Text, View } from "react-native";
import Naviagtion from "./components/Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Group } from "./components/Groups/Group";
import { PayementView } from "./components/pages/PayementView";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const Test = ({ route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Group">
            {(props) => <Group {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Home" component={Naviagtion} />
          <Stack.Screen name="payment-view">
            {(props) => <PayementView {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
