import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        query:'',
        activeTab:'photo',
        results:[],
        loading:false,
        error:null
    },
    reducers:{
        setQuery(state,action){
            state.query=action.payload
        },
        setActiveTabs(state,action){
            state.activeTab= action.payload
        },
        setResult(state,action){
            state.results=action.payload
        },
        setLoading(state,action){
            state.loading = action.payload
        },
        setError(state,action){
            state.error= action.payload
        },
        setResult(state){
            state.results=[]
        }
    }
})

export const{
  setQuery,
    setActiveTabs,
    setError,
    setLoading,
    setResults,
    clearResults
}=searchSlice.actions

export default searchSlice.reducer