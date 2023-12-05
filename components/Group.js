import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Icon, Surface, Text } from "react-native-paper";

const Group = ({ name, details }) => (
  <TouchableOpacity style={styles.group}>
    <Avatar.Text style={styles.avatar} label={name.slice(0, 2).toUpperCase()} />
    <View style={styles.content}>
      <View>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  details: {
    fontSize: 15,
    paddingLeft: 15,
    fontWeight: 700,
    color: "green",
  },
  header: {
    fontWeight: "800",
    fontSize: 25,
    padding: 5,
    paddingLeft: 15,
    paddingBottom: 1,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    width: "75%",
  },
  group: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 10,
    borderRadius: 20,
    padding: 15,
  },
});

export default Group;
