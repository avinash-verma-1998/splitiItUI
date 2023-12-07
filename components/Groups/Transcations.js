import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, List, Text } from "react-native-paper";

export const Expense = ({ date, name, total, title, paid, share, last }) => {
  const lentOrBorrowed = paid ? "lent" : "borrowed";
  const payer = paid ? "you" : name;
  const color = paid ? "green" : "red";
  const style = last ? [styles.transcation, styles.last] : styles.transcation;

  return (
    <>
      <List.Item
        style={style}
        title={`Expense: ${title}`}
        left={() => <Text style={styles.date}>{date}</Text>}
        description={`${payer} paid ${total}`}
        right={() => (
          <View style={styles.right}>
            <Text
              style={[styles.small, styles[color]]}
            >{`you ${lentOrBorrowed}`}</Text>
            <Text style={[styles.small, styles[color]]}>{share}</Text>
          </View>
        )}
      />
      <Divider />
    </>
  );
};

export const Payment = ({ payer, payee, amount, date, last }) => {
  const style = last ? [styles.transcation, styles.last] : styles.transcation;
  return (
    <>
      <List.Item
        style={style}
        title="Payment"
        left={() => <Text style={styles.date}>{date}</Text>}
        description={`${payer} paid ${payee} ${amount}`}
      />
      <Divider />
    </>
  );
};

const styles = StyleSheet.create({
  transcation: { paddingLeft: 15 },
  date: {
    fontSize: 20,
    color: "grey",
  },
  small: {
    fontSize: 12,
  },
  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
  last: {
    paddingBottom: 300,
  },
});
