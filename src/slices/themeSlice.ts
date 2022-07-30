import { createSlice} from "@reduxjs/toolkit";

interface ThemeInterface {
    theme: any;
}

const initalState:ThemeInterface = {
    theme: "light" || localStorage.getItem("theme")
}

const themeSlice = createSlice({
    name: "theme",
    initialState: initalState,
    reducers: {
        setTheme: (state:ThemeInterface) =>{
           if(state.theme === "light") state.theme = "dark"
           else state.theme = "light"

           localStorage.setItem("theme", state.theme);
        },
    }
})

export default themeSlice.reducer
export const { setTheme } = themeSlice.actions;
export const currentTheme = (state: ThemeInterface) => state.theme;
