import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Checkbox = ({ label, checked, onChange }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleToggle}>
      <MaterialIcons
        name={isChecked ? "check-box" : "check-box-outline-blank"}
        size={24}
        color={isChecked ? "#e7b34c" : "black"}
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "rgb(230 230 230 )",
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default Checkbox;
