import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const EditButtons = ({ onEdit, onDelete }) => {
  return (
    <View style={styles.edit}>
      <Icon size={40} name="remove" />
      <Icon size={40} name="edit" />
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    paddingRight: 15,
    paddingTop: 10,
  },
});
