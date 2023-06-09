import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const SignUp = createSlice({
  name: "SignUp",
  initialState: {
    autosuggestusers: [],
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSuggestedUsers.pending, (state, action) => {
        state.autosuggestusers = [];
      })
      .addCase(fetchSuggestedUsers.fulfilled, (state, action) => {
        state.autosuggestusers = action.payload;
      })
      .addCase(fetchSuggestedUsers.rejected, (state, action) => {
        state.autosuggestusers = [];
      })
      .addCase(createUser.pending, (state, action) => {
        state.user = {};
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user = [];
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.user = {};
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.user = [];
      });

  },
});

export default SignUp.reducer;

export const fetchSuggestedUsers = createAsyncThunk(
  "suggest/users",
  async () => {
    const res = await fetch(`http://localhost:8080/api/user/signinup/users`);
    const data = await res.json();
    console.log("fetched users are:", data.data);
    return data.data;
  }
);

export const createUser = createAsyncThunk("user/create", async (data) => {
  const url = "http://localhost:8080/api/user/signinup/";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const responseData = await response.json(); // Parse the response body as JSON

  console.log("response is:", responseData);
  return responseData;
});

export const forgotPassword = createAsyncThunk(
    "user/forgotpwd",
    async(object) => {
        const url = "http://localhost:8080/api/user/signinup/passwordresetcode";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  });
  const responseData = await response.json(); // Parse the response body as JSON

  console.log("response is:", responseData);
  return responseData;

    }
    )
