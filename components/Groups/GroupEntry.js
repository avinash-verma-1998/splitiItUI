import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Avatar, Icon, List, Surface, Text } from "react-native-paper";

const GroupEntry = ({ name, details, onPress, last }) => {
  const style = last ? [styles.group, styles.last] : styles.group;
  return (
    <List.Item
      style={style}
      onPress={onPress}
      title={() => <Text style={styles.header}>{name}</Text>}
      description={() => <Text style={styles.details}>{details}</Text>}
      left={() => (
        <Avatar.Text
          style={styles.avatar}
          label={name.slice(0, 2).toUpperCase()}
        />
      )}
    />
  );
};

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
  last: {
    paddingBottom: 300,
  },
});

export default GroupEntry;
