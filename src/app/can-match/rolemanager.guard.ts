import { CanMatchFn } from '@angular/router';

export const rolemanagerGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');
  if (role === 'ENGINEER') {
    return true;
  }
  return false;
};
