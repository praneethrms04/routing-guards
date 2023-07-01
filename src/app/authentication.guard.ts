import { CanActivateChildFn } from '@angular/router';

export const authenticationGuard: CanActivateChildFn = (childRoute, state) => {
  const token = localStorage.getItem('token');
  if (token) {
    return true;
  }
  return false;
};
