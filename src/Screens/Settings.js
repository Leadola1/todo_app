import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setNotificationPreference } from "../Redux/SettingsSlice";
import Checkbox from "../Components/Checkbox";

const Settings = () => {
  const [sms, setSms] = useState(false);
  const [push, setPush] = useState(false);
  const [email, setEmail] = useState(false);

  const dispatch = useDispatch();
  const notificationPreferences = useSelector(
    (state) => state.settings.notificationPreferences
  );

  const onSave = () => {
    dispatch(
      setNotificationPreference({
        sms,
        push,
        email,
      })
    );
    Alert.alert("Notification Preferences Saved");
  };
  useState(() => {
    setSms(notificationPreferences.sms);
    setPush(notificationPreferences.push);
    setEmail(notificationPreferences.email);
  }, [notificationPreferences]);
  console.log(sms, push, email);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notification Preferences</Text>
      <Checkbox label="SMS" value={sms} onChange={setSms} />
      <Checkbox label="Push" value={push} onChange={setPush} />
      <Checkbox label="Email" value={email} onChange={setEmail} />
      <TouchableOpacity style={styles.button} onPress={onSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
    color: "#e7b34c",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#e7b34c",
    color: "white",
    width: "90%",
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
    alignSelf: "center",
    marginTop: 15,
  },
  buttonText: {
    color: "white",
    alignSelf: "center",
    fontSize: "18",
  },
});

export default Settings;
