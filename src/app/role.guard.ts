import { CanActivateFn, Router } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  const role = route.data['role'];
  // console.log(role);
  console.log(state);

  const router = new Router();

  if (role === 'ADMIN') {
    return true;
  } else {
    router.navigate(['login']); // Use state.root for relativeTo
    return false;
  }
};
