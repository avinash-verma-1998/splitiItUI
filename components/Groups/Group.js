import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { Expense, Payment } from "./Transcations";

export const Group = ({ route }) => {
  const { groupName, groupStatus } = route.params;
  const expenseProp = {
    date: "04 sep",
    name: "narayan",
    total: "\u20B9100.00",
    title: "bhurji dsfdsfdsfdsfdsfdsfdsfsd",
    paid: false,
    share: "20.00",
  };
  const payemntProp = {
    date: "04 sep",
    payer: "avinash",
    payee: "narru",
    amount: "1000",
  };
  return (
    <SafeAreaView style={styles.group}>
      <View style={styles.header}>
        <Text style={styles.heading}>{groupName}</Text>
        <Text style={styles.status}>{groupStatus}</Text>
      </View>
      <Divider />
      <View style={styles.actions}>
        <Button mode="contained-tonal">Settle up</Button>
        <Button mode="contained-tonal">Balances</Button>
      </View>
      <ScrollView style={styles.scroll}>
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Payment {...payemntProp} />
        <Expense {...expenseProp} last />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  group: {
    display: "flex",
  },
  header: {
    paddingLeft: 10,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 50,
  },
  status: {
    color: "grey",
    fontSize: 20,
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    gap: 20,
  },
});
