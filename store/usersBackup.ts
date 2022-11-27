import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice
  } from '@reduxjs/toolkit';
  import { RootState } from '.';
  
  interface UserData {
    userId: string;
    email: string;
    username: string;
    alias: string;
    profilePic: string;
    widthdrawallWallets: [
        {
            address: string;
            referenceName: string;
        }
    ],
    lastBalance: number,
    uuid: string;
    accessToken: string;
  }
  
  export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    
    console.log("solicitud de fetch recibida: ", JSON.stringify({
      username: "Caro94",
      password: "1234567890"
    }));

    const config = {
      headers: { ContentType: `application/json` }
    };

    const response = await fetch('https://chiro-backend.herokuapp.com/api/auth/servant/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: "Caro94",
        password: "1234567890"
      }),
    });

    return [(await response.json())] as UserData[];
  });
  
  export const usersAdapter = createEntityAdapter<UserData>();
  
  const usersSlice = createSlice({
    name: 'users',
    initialState: usersAdapter.getInitialState({
      loading: false
    }),
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        usersAdapter.setAll(state, action.payload);
        state.loading = false;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        console.log("No está autorizado.", action);
        state.loading = false;
      });
    }
  });
  
  
  export default usersSlice.reducer;    