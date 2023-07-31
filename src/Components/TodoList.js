import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, markTaskAsDone } from "../Redux/TaskSlice";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  console.log("load");

  const {
    wrapper,
    renderItemWrapper,
    renderItemDelete,
    renderItemDone,
    renderItemText,
    wrapperDelete,
    completedTask,
    completedDelete,
    completedIcon,
    completedWrapper,
  } = styles;

  const onDeleteTask = (taskId) => {
    dispatch(deleteTask({ id: taskId }));
    Alert.alert("Task deleted");
  };
  const onMarkTaskAsDone = (taskId) => {
    dispatch(markTaskAsDone({ taskId }));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={[renderItemWrapper, item.isDone && completedWrapper]}>
        <TouchableOpacity
          style={wrapperDelete}
          onPress={() => onMarkTaskAsDone(item.id)}
        >
          <Ionicons
            style={[renderItemDone, item.isDone && completedIcon]}
            name={item.isDone ? "checkmark-circle" : "checkmark-circle-outline"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <Text style={[renderItemText, item.isDone && completedTask]}>
          {item.name}
        </Text>
        <TouchableOpacity
          style={wrapperDelete}
          onPress={() => onDeleteTask(item.id)}
        >
          <AntDesign
            style={[renderItemDelete, item.isDone && completedDelete]}
            name="delete"
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={wrapper}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  renderItemWrapper: {
    alignSelf: "center",
    flexDirection: "row",
    width: "95%",
    padding: 12,
    backgroundColor: "rgb(230 230 230)",
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  renderItemText: {
    width: "70%",
    marginLeft: 15,
  },
  renderItemDelete: {
    width: "100%",
  },
  renderItemDone: {
    width: "100%",
  },
  wrapperDelete: {
    width: "10%",
  },
  completedTask: {
    textDecorationLine: "line-through",
    color: "#e7b34c",
  },
  completedDelete: {
    color: "#e7b34c",
  },
  completedIcon: {
    color: "#e7b34c",
  },
  completedWrapper: {},
});
export default TodoList;
