import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { authReducer } from './state/user.reducer';
import { AuthEffects } from './state/user.effects';

export const appConfig: ApplicationConfig = {

providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideStore({'user': authReducer}),
    provideEffects([AuthEffects]),
],

};
