import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notificationPreferences: {
    sms: false,
    push: false,
    email: false,
  },
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setNotificationPreference: (state, action) => {
      const { sms, push, email } = action.payload;
      state.notificationPreferences = {
        sms: sms || state.notificationPreferences.sms,
        push: push || state.notificationPreferences.push,
        email: email || state.notificationPreferences.email,
      };
    },
  },
});

export const { setNotificationPreference } = settingsSlice.actions;
export default settingsSlice.reducer;
