// import { Injectable } from "@angular/core";
// import { Actions, createEffect, ofType } from "@ngrx/effects";
// import { catchError, map, switchMap, tap } from "rxjs/operators";
// import { of } from "rxjs";
// import { Router } from "@angular/router";
// import { loginFailure,
//     loginRequest,
//     loginSuccess,
//     signupRequest,
//     signupFailure,
//     signupSuccess,

//     } from "./user.action";
// // import { AuthService } from "../services/auth.service";
// import { UserService } from "../services/user.service";

// @Injectable()

// export class AuthEffects{

//     constructor( private actions$ : Actions, 
//         private authService : AuthService,
//         private userService: UserService,
//         private router : Router){}

//     login$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(loginRequest),
//             switchMap(({ credentials }) =>
//                 this.authService.login(credentials).pipe(
//                     map(res=>{
//                         let response : any = res;
//                         console.log(response);
                        
//                         if(response.status=='success'){
//                             localStorage.setItem('user-token',response.token)
//                             localStorage.setItem('user-data',JSON.stringify(response.userData))
//                             return loginSuccess({userToken : response.token, userData: response.userData})
//                         }
//                         else{
//                             console.log('login error');
                            
//                             return loginFailure({ error : response.error.error  })
//                         }
//                     }),
//                     catchError(error => of (loginFailure({ error })))
//                 )
//             )
//         )
//     );

//     loginSuccess$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(loginSuccess),
//             tap(( )=>{
//                 this.router.navigate(['/']);  
//             })
//         ), {
//             dispatch : false
//         }
//     );


//     loginFailure$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(loginFailure),
//             tap(()=>{
//                 console.log('llogin error');
                
//                 this.router.navigate(['/login'])
//             })
//         ), {
//             dispatch: false
//         }
//     );


//     signup$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(signupRequest),
//             switchMap(({ user }) =>
//                 this.authService.signup(user).pipe(
//                     map(res=>{
//                         let response : any = res;
//                         console.log('in effects',response);
                        
//                         if(response.status=='success'){
//                             console.log(response.status);
                            
//                             localStorage.setItem('user-token',response.token)
//                             localStorage.setItem('user-data',JSON.stringify(response.userData))
//                             return signupSuccess({userToken : response.token, userData: response.userData})
//                         }
//                         else{
//                             console.log('signup error');
                            
//                             return signupFailure({ error : response.error.error  })
//                         }
//                     }),
//                     catchError(error => of (signupFailure({ error })))
//                 )
//             )
//         )
//     );

//     signupSuccess$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(signupSuccess),
//             tap(()=>{
//                 console.log('signup sussc');
                
//                 this.router.navigate(['/']);
//             })
//         ), {
//             dispatch : false
//         }
//     );

//     signupFailure$ = createEffect(()=>
//         this.actions$.pipe(
//             ofType(signupFailure),
//             tap(()=>{
//                 console.log('sign up faliure');
                
//                 this.router.navigate(['/signup'])
//             })
//         ), {
//             dispatch: false
//         }
//     );

// //     update$ = createEffect(()=>
// //         this.actions$.pipe(
// //             ofType(editProfileRequest),
// //             switchMap(({ user }) =>
// //                 this.userService.updateUserDetails(user).pipe(
// //                     map(res=>{
// //                         let responce : any = res;
// //                         if(responce.status=='success'){
// //                             localStorage.setItem('user-data',JSON.stringify(responce.userData))
// //                             return editProfileSuccess({ userData: responce.userData})
// //                         }
// //                         else{
// //                             return responce;
// //                         }
// //                     }),
// //                 )
// //             )
// //         )
// //     );

// //     updateSuccess$ = createEffect(()=>
// //         this.actions$.pipe(
// //             ofType(editProfileSuccess),
// //             tap(()=>{
// //                 setTimeout(()=>{
// //                     window.location.reload()
// //                 },500)
// //                 this.router.navigate(['/'])
// //             })
// //         ), {
// //             dispatch : false
// //         }
// //     );



// }