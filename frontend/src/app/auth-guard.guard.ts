import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  if(window.sessionStorage.getItem('user-token')){
    return true;
  }
  return false;
};
