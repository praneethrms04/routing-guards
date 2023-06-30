import { CanDeactivateFn } from '@angular/router';

export const formDeatcivateGuard: CanDeactivateFn<unknown> = (
  component: any,
  currentRoute,
  currentState,
  nextState
) => {
  console.log(component);

  if (component && component.username) {
    let confirmation = confirm('are you sure ');
    if (confirmation) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};
