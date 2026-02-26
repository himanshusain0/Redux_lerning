import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    query: '',
    activeTab: 'photo',
    results: [],
    loading: false,
    error: null
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {

        setQuery(state, action) {
            state.query = action.payload;
        },

        setActiveTabs(state, action) {
            state.activeTab = action.payload;
        },

        setResults(state, action) {
            state.results = action.payload;
            state.loading = false;
            state.error = null;
        },

        clearResults(state) {
            state.results = [];
        },

        setLoading(state) {
            state.loading = true;
            state.error = null;
        },

        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const {
    setQuery,
    setActiveTabs,
    setResults,
    clearResults,
    setLoading,
    setError
} = searchSlice.actions;

export default searchSlice.reducer;