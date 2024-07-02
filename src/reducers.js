import { createSlice } from "@reduxjs/toolkit";

const estIni = {
    episodios: [],
    infper: "",
    rickymort: [],
    nmm: "",
    imgg: ""
};

const reducers = createSlice({
    name: 'holaApp',
    initialState: estIni,
    reducers: {
        setEpisodios: (state,action) => {
            state.episodios = action.payload;
            state.name = action.payload;
        },
        setInfper: (state, action) => {
            state.infper = action.payload;
        },
        setRM: (state, action) => {
            state.rickymort = action.payload;
        },
        setEpisodios2: (state,action) => {
            state.nmm = action.payload;
        },
        setEpisodiosim: (state,action) => {
            state.imgg = action.payload;
        }
    }
     });
    export const { setEpisodios, setInfper, setRM, setEpisodios2, setEpisodiosim } = reducers.actions;
    export default reducers.reducer;
    