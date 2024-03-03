import React from "react";
import GroupEntry from "./GroupEntry.jsx";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import { Status } from "../utils/Status.jsx";
import { Button } from "react-native-paper";
import {} from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

export const GroupRoute = () => {
  const groupState = {
    groupName: "Danavs",
    groupStatus: "this owes you this",
    groupID: "some id",
  };
  const navigation = useNavigation();
  return (
    <View style={styles.groups}>
      <View style={styles.status}>
        <Status />
      </View>
      <View style={styles.list}>
        <FlatList
          data={[2, 3, 4, 5, 6, 7, 8, 0]}
          renderItem={({ item }) => {
            return (
              <GroupEntry
                onPress={() => {
                  navigation.navigate("Group", groupState);
                }}
                last={item === 0}
                name={item === 0 ? "last" : "danavs"}
                details="alldfd  up"
              />
            );
          }}
        />
      </View>
      <Button
        mode="elevated"
        col
        compact
        style={styles.addButton}
        onPress={() => navigation.navigate("CreateGroup")}
      >
        Add Entry
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  groups: {
    position: "relative",
    display: "flex",
  },
  addButton: {
    position: "absolute",
    bottom: 150,
    right: 50,
    zIndex: 30,
    padding: 10,
    fontWeight: 100,
  },
});
