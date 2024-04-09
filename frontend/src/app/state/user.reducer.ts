import { Action, createReducer, on } from "@ngrx/store";
import { loginSuccess, loginFailure ,signupSuccess, signupFailure } from "./user.action";
// import { UserState } from "./user.state";

export const InitialState: any =  {
    UserToken: '',
    errorMessage: undefined
}

const _authReducer = createReducer(
    InitialState,
//     on(browserReload,(state, {userToken, userData})=>{
//         return {
//             ...state,
//             UserToken : userToken,
//             userData: userData,
//             errorMessage: undefined
//         }
//     }),
//     on(editProfileSuccess,(state, { userData})=>{
//         return {
//             ...state,
//             userData: userData,
//             errorMessage: undefined
//         }
//     }),
    on(loginSuccess,(state, {userToken, userData})=>{
        return {
            ...state,
            UserToken : userToken,
            userData: userData,
            errorMessage: undefined
        }
    }),
    on(loginFailure,(state,{error})=>{
        return {
            ...state,
            UserToken: " ",
            errorMessage: error.error.message
        }
    }),
    on(signupSuccess,(state, {userToken, userData})=>{
        return {
            ...state,
            UserToken : userToken,
            userData: userData,
            errorMessage: undefined
        }
    }),
    on(signupFailure,(state,{error})=>{
        console.log(error.error.message);
        
        return {
            ...state,
            UserToken: " ",
            errorMessage: error.error.message
        }
    }),
) 


export function authReducer(state: any = InitialState, action: Action){
    return _authReducer(state,action)
}
