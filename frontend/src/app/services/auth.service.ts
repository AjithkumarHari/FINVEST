import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../types/User';
import { Credentials } from '../types/Credentials';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private apiUrl: string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) {  }

    login(credentials: Credentials) {
        return this.http.post(`${this.apiUrl}/auth/login`, credentials)
    }

    signup(userData: User) {
        return this.http.post(`${this.apiUrl}/auth/register`, userData)
    }

    setToken(userToken: string): void {
        return window.sessionStorage.setItem('user-token', userToken);
    }

    getToken(): string | null {
        return window.sessionStorage.getItem('user-token');
    }

    deleteToken(): void {
        window.sessionStorage.removeItem('user-token');
        window.sessionStorage.removeItem('user-data');
    }

} 
