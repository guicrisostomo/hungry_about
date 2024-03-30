import { CanActivateFn } from '@angular/router';

export const universalGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
