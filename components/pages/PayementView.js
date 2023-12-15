import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Dialog,
  Portal,
  PaperProvider,
  Text,
  Icon,
} from "react-native-paper";

const PayementView = ({ visible, setVisible, data }) => {
  const hideDialog = () => setVisible(false);
  const { payee, payer, amount, date } = data;

  return (
    <View>
      <Portal>
        <Dialog style={styles.dialog} visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Payement</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{`${payer} paid ${payee} ${amount} on ${date}`}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>delete</Button>
            <Button onPress={hideDialog}>edit</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  dialog: {},
});

export default PayementView;
