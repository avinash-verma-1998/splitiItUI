import { StyleSheet, Text, View } from "react-native";
import Naviagtion from "./components/pages/Navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Group } from "./components/groups/Group";
import { PayementView } from "./components/pages/PayementView";
import { PaperProvider } from "react-native-paper";
import { CreateGroup } from "./components/groups/CreateGroup";

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
          <Stack.Screen name="CreateGroup">
            {(props) => <CreateGroup {...props} />}
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
