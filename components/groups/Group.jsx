import { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { Button, Divider, Text } from "react-native-paper";
import { Expense, Payment, Transcations } from "./Transcations";
import { useNavigation } from "@react-navigation/native";
import PayementView from "../pages/PayementView";
import GroupEntry from "./GroupEntry";

export const Group = ({ route }) => {
  const [visible, setPaymentVisible] = useState(false);
  const [paymentData, setPaymentData] = useState({});
  const { groupName, groupStatus } = route.params;
  const expenseProp = {
    date: "04 sep",
    name: "narayan",
    total: "\u20B9100.00",
    title: "bhurji dsfdsfdsfdsfdsfdsfdsfsd",
    paid: false,
    share: "20.00",
  };
  const payementProp = {
    date: "04 sep",
    payer: "avinash",
    payee: "narru",
    amount: "1000",
  };
  const navigator = useNavigation();
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
      <PayementView
        visible={visible}
        setVisible={setPaymentVisible}
        data={paymentData}
      />
<View
style={{flex:1}}
>
         <FlatList
          data={[{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'P',props:payementProp},{type:'E',props:expenseProp},{type:'P',props:payementProp},{type:'P',props:payementProp},{type:'P',props:payementProp},{type:'P',props:payementProp}
          ,{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'E',props:expenseProp},{type:'P',props:{...payementProp,last:true}}]}
          renderItem={({ item }) => {
            return (
              <Transcations
            
              
              type={item.type}
              props={{...item.props,  onPress:() => {
                setPaymentVisible(true);
                setPaymentData(payementProp);
              }}}
              />
              );
            }}
            />
            </View>
      {/* <ScrollView style={styles.scroll}>
        <Expense {...expenseProp} />
        <Payment
          
          {...payementProp}
        />
        <Expense {...expenseProp} />
        <Payment {...payementProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />
        <Expense {...expenseProp} />

        <Expense {...expenseProp} last />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  group: {
    display: "flex",
    flex:1
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
