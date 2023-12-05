import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

export const Status = () => {
  return (
    <View>
      <Text style={styles.status}>
        you owe <Text style={styles.bold}>10 rs</Text>to this{" "}
        <Text style={styles.bold}>guy</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 900,
  },
  status: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: 20,
    marginBottom: 10,
    minHeight: 75,
    padding: 20,
    paddingTop: 40,
    paddingLeft: 30,
    borderBottomWidth: 2,
    fontSize: 20,
    borderBottomColor: "black",
  },
});
