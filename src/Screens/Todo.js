import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TaskSlice";
import TodoList from "../Components/TodoList";

const Todo = () => {
  const dispatch = useDispatch();
  console.log("load");
  const [todo, setTodo] = useState("");
  const { textinput, wrapper, button, buttonText } = styles;
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("you need to input a text");
      setTodo("");
      console.log("empty");
      return;
    }
    // const id = Date.now();
    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
  };

  console.log(todo);
  return (
    <SafeAreaView>
      <View style={wrapper}>
        <TextInput
          style={textinput}
          placeholder="Add Todo"
          value={todo}
          onChangeText={(text) => {
            setTodo(text);
          }}
        />
        <TouchableOpacity style={button} onPress={onSubmitTask}>
          <Text style={buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textinput: {
    margin: 20,
    padding: 20,
    width: "85%",
    backgroundColor: "rgb(230 230 230)",
    borderRadius: 10,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#e7b34c",
    color: "white",
    width: "85%",
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
});
export default Todo;
