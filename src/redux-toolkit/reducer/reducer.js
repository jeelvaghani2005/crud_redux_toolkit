import { createSlice } from "@reduxjs/toolkit"
import { deleteuser, getuser, postuser, updateuser } from "../api/api"


const initialState = {
  data: [],
  isprogress: false,
  iserror: false
}

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {

    builder.addCase(getuser.pending, (state, action) => {
      state.isprogress = true
    })

    builder.addCase(getuser.fulfilled, (state, action) => {
      state.isprogress = false
      state.data = action.payload.data
    })

    builder.addCase(getuser.rejected, (state, action) => {
      state.iserror = true
    })

    // post dtaa

    builder.addCase(postuser.pending, (state, action) => {
      state.isprogress = true
    })

    builder.addCase(postuser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isprogress = false
      state.data = state.data.concat(action.payload)
    })

    builder.addCase(postuser.rejected, (state, action) => {
      state.iserror = true
    })


    // delete dtaa

    builder.addCase(deleteuser.pending, (state, action) => {
      state.isprogress = true
    })

    builder.addCase(deleteuser.fulfilled, (state, action) => {
      console.log(action);
      state.isprogress = false
      state.data = state.data.filter((e) => e.id !== action.payload)
    })

    builder.addCase(deleteuser.rejected, (state, action) => {
      state.iserror = true
    })


    // update


    builder.addCase(updateuser.pending, (state, action) => {
      state.isprogress = true
    })

    builder.addCase(updateuser.fulfilled, (state, action) => {
      state.isprogress = false
      state.data = state.data.map((val) => {
        if (val.id === action.payload.id) {
          return {
            ...val, ...action.payload
          }
        }
        else {
          return val;
        }
      })
    })

    builder.addCase(updateuser.rejected, (state, action) => {
      state.iserror = true
    })
  }
})
export default userSlice.reducer

