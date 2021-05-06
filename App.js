import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

const App = () => {
  const [goal, setg] = useState([]);
  const [a, seta] = useState("");
  const [isOpen,setOpen]=useState(false);

  const add = () => {
    setg((pre) => [...pre, { id: Math.random().toString(), value: a }]);

    setOpen(false);
  };
  const deleteItem = (i) => {
    setg((curentitems) => {
      return curentitems.filter((item) => item.id != i);
    });
  };
  const cancelGoalAdd=()=>{
    setOpen(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Ad Item" onPress={()=>setOpen(true)}/>
      <GoalInput seta={(e) => seta(e)} add={() => add()} open={isOpen} onCancel={cancelGoalAdd} />
      <FlatList
        data={goal}
        keyExtractor={() => Math.random().toString()}
        renderItem={(e, i) => (
          <GoalItem item={e.item} onDelete={(id) => deleteItem(id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});

export default App;
