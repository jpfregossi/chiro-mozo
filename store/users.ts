import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit';
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

const initialUserState = null as unknown as UserData;

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (token: string, thunkAPI) => {
  const config = {
    headers: { ContentType: `application/json` }
  };

  const userToken = await TokenStore.load();

  if (!userToken || userToken.token == null || userToken.token == undefined) return thunkAPI.rejectWithValue("no token present.");

  console.log("\nFetching User: ", userToken.token);

  try {
    const response = await fetch('https://chiro-backend.herokuapp.com/api/chirolear/servant/update', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userToken.token
      },
    }).then(resp => {
      if (resp.status != 200) return thunkAPI.rejectWithValue("Error en el fetch: " + resp.status);
      return resp.json();
    }).then((json) => {
      console.log("recibio user: ", json);
      return json as UserData;
    });

    //const user = (await response.json()) as UserData;
    //user.accessToken = userToken.token;

    return response;
  } catch (e) {
    thunkAPI.rejectWithValue("error: " + e);
  }
});

export const loginUser = createAsyncThunk('users/fetchUsers', async (data: Request, thunkAPI) => {
  console.log("Comenzando el request...");
  try {
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
    })

    const user = (await response.json()) as UserData;

    console.log("Antes de la persistencia...: ", user);
    TokenStore.save({ token: user.accessToken });

    return user as UserData;
  } catch (e) {
    thunkAPI.rejectWithValue("credenciales inválidas. " + e);
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    loading: true,
    authenticated: false,
    currentUser: initialUserState,
  },
  reducers: {
    logOut: (state) => {
      TokenStore.delete();
      state.authenticated = false;
      state.loading = false;
    },
    stopLoading: (state) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      console.log("Iniciando fetchUsers...");
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled || loginUser.fulfilled, (state, action) => {
      console.log("Fue fulfilled......");
      state.currentUser = action.payload as UserData;
      state.authenticated = true;
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

export const { logOut, stopLoading } = usersSlice.actions;

export default usersSlice.reducer;    