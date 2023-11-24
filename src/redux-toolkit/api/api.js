import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL, DELETE_URL, GET_URL, POST_URL, UPDATE_URL } from "../constant";

export const getuser = createAsyncThunk("getuser", async () => {
    return axios.get(BASE_URL + GET_URL).then((res) => {
        const data = res.data

        return {
            data
        }
    })
})


export const postuser = createAsyncThunk("postuser", async (data) => {
    return axios.post(BASE_URL + POST_URL, data).then((res) => {
        const data = res.data
        console.log(res);
        return data
    })
})

// delete 

export const deleteuser = createAsyncThunk("deleteuser", async (id) => {

    console.log(id);
    return axios.delete(BASE_URL + DELETE_URL + id).then((res) => {
        const data = res.data
        console.log(res,"api response");
        return data
    })
})

// update

export const updateuser = createAsyncThunk("updateuser", async (data) => {
    // console.log(data);
    return axios.put(BASE_URL + UPDATE_URL + data.id, data).then((res) => {
        const data = res.data
        console.log(res);
        return data
    })
})

