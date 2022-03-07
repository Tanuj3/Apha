import { createContext } from "react";
import { useReducer } from "react"; 
import AuthReducer from "./AuthReducer";

const INITAL_STATE ={
    user:{
        _id:"620be7fe9a26d918af83025e",
        username:"abcd",
        email:"abcd@gmail.com",
        password:"$2b$10$fB21Xz8bNjtqVFTTYJ9e9OF44dTj6t2bFWBsBw0yvtIrsLOpmtcZW",
        profilePicture:"",
        coverPicture:"",
        followings:[],
        followers:[]
    },
    //user:null,
    isFetching:false,
    error:false
};


export const AuthContext = createContext(INITAL_STATE);

 export const AuthContextProvider = ({children}) => {
     const [state, dispatch] = useReducer(AuthReducer,INITAL_STATE)
     
     return (
         <AuthContext.Provider  value={{user:state.user,isFetching:state.isFetching,error:state.error,dispatch } }>
             {children}
         </AuthContext.Provider>
     )
 }