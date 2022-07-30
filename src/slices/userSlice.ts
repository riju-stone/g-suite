import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserInterface {
    userName: any;
    userEmail: any;
    profilePicture: any;
}

const initalState:UserInterface = {
    userName: "" || localStorage.getItem("userName"),
    userEmail: "" || localStorage.getItem("userEmail"),
    profilePicture: "" || localStorage.getItem("userProfilePicture")
}

const userSlice = createSlice({
    name: "user",
    initialState: initalState,
    reducers: {
        setActiveUser: (state:UserInterface, action:PayloadAction<any>) =>{
            state.userName = action.payload.userName;
            state.userEmail = action.payload.userEmail;
            state.profilePicture = action.payload.profilePicture;

            localStorage.setItem("userName", action.payload.userName);
            localStorage.setItem("userEmail", action.payload.userEmail);
            localStorage.setItem("userProfilePicture", action.payload.profilePicture);
        },
        setLogoutState: (state:UserInterface) => {
            state.userName = "";
            state.userEmail = "";
            state.profilePicture = "";

            localStorage.removeItem("userName");
            localStorage.removeItem("userEmail");
            localStorage.removeItem("userProfilePicture");
        },
    }
})

export default userSlice.reducer
export const { setActiveUser, setLogoutState } = userSlice.actions;
export const currentUserName = (state:UserInterface) => state.userName;
export const currentUserEmail = (state:UserInterface) => state.userEmail;
export const currentUserImage = (state:UserInterface) => state.profilePicture;