import React from "react";
import Group from "./Group";
import { ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { Status } from "./Status.js";
import { Button } from "react-native-paper";

export const GroupRoute = () => {
  return (
    <View style={styles.groups}>
      <Status />
      <ScrollView style={styles.scroll}>
        <View style={styles.groupContainer}>
          <Group name={"danavs"} details="all  up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
          <Group name={"danavs"} details="all settled up" />
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
