import React from "react";
import GroupEntry from "./GroupEntry.js";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Status } from "./Status.js";
import { Button } from "react-native-paper";
import {} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export const GroupRoute = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.groups}>
      <Status />
      <ScrollView style={styles.scroll}>
        <View style={styles.groupContainer}>
          <GroupEntry
            onPress={() => {
              console.log("pressed");
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
          <GroupEntry
            onPress={() => {
              navigation.navigate("Group", { name: "lkfjsdlkjflskdjflkdsjf" });
            }}
            name={"danavs"}
            details="all  up"
          />
        </View>
      </ScrollView>
      <Button mode="elevated" col compact style={styles.addButton}>
        Add Entry
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  group: {
    position: "relative",
  },
  addButton: {
    position: "absolute",
    bottom: 150,
    right: 50,
    zIndex: 30,
    padding: 10,
    fontWeight: 100,
  },
  groupContainer: {
    display: "flex",
    alignItems: "center",
    width: "90%",
  },
});
