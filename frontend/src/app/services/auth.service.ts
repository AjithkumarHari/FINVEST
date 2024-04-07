import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
        ) { }

    login(credentials: any): Observable<any> {
        return this.http.get('')
    }

    signup(userData: User) {
        return this.http.post('http://localhost:3000/api/auth/register',userData)
    }

    logger(){
        console.log('logger');
        
    }

} 
