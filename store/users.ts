import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
import { RootState } from '.';
import TokenStore from './tokenStore';

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
  feedback: [Feedback];
}

interface Feedback {
  message: string;
}

interface Request {
  username: string,
  password: string,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (token: string, thunkAPI) => {
  const config = {
    headers: { ContentType: `application/json` }
  };

  console.log("\nFetching User: ", token);

  const response = await fetch('https://chiro-backend.herokuapp.com/api/chirolear/servant/update', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  });

  const user = (await response.json()) as UserData;
  user.accessToken = token;

  return [user] as UserData[];
});

export const loginUser = createAsyncThunk('users/fetchUsers', async (data: Request, thunkAPI) => {
  console.log("Comenzando el request...");
  const response = await fetch('https://chiro-backend.herokuapp.com/api/auth/servant/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password
    }),
  });

  const user = (await response.json()) as UserData;

  console.log("Antes de la persistencia...: ", user);
  TokenStore.save({token: user.accessToken});

  console.log("Antes del response...");
  return [user] as UserData[];
});

export const usersAdapter = createEntityAdapter<UserData>();


const usersSlice = createSlice({
  name: 'users',
  initialState: usersAdapter.getInitialState({
    loading: false,
    authenticated: false,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled || loginUser.fulfilled , (state, action) => {
      console.log("Fue fulfilled....");
      if (action.payload[0].accessToken) {
        usersAdapter.setAll(state, action.payload);
        state.authenticated = true;
        console.log("Fue Autenticado");
      } else {
        state.authenticated = false;
        console.log("No pudo ser Autenticado: ", action.payload);
        console.log("se eliminó el token vencido: ", TokenStore.delete());
      }
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      console.log("No está autorizado.", action);
      state.loading = false;
      state.authenticated = false;
      TokenStore.delete();
    });
  }
});

export const {
  selectById: selectBy_Id,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers
} = usersAdapter.getSelectors((state: RootState) => state.users);

export default usersSlice.reducer;    