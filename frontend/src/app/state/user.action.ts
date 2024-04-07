import { createAction, props } from "@ngrx/store";
// import { ErrorRes } from "src/app/types/ErrorRes";
import { User } from "../types/User";
// import { Credentials } from "src/app/types/Credentials";

// export const browserReload = createAction(
//     `User Reloads the Browser`,
//     props<{userToken: string, userData: any}>()
// )

// export const editProfileRequest = createAction(
//     `User Updates the Profile`,
//     props<{user: User}>()
// )

// export const editProfileSuccess = createAction(
//     `User Updates the Profile`,
//     props<{userData: any}>()
// )

export const loginRequest = createAction(
    `Auth Login Request`,
    props<{credentials: any}>()
)


export const loginSuccess = createAction(
    `Auth Login Success`,
    props<{userToken: string, userData: any}>()
)

export const loginFailure = createAction(
    `Auth Login Failure`,
    props<{error: any}>()
)

export const signupRequest = createAction(
    `Auth Signup Request`,
    props<{user: User}>()
)

export const signupSuccess = createAction(
    `Auth Signup Success`,
    props<{userToken: string, userData: any}>()
)

export const signupFailure = createAction(
    `Auth Signup Failure`,
    props<{error: any}>()
)