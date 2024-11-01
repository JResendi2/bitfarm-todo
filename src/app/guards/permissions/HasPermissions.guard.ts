import { inject } from '@angular/core';
import type { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth/Auth.service';


export const hasPermissionsGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);

  if (route.data) {
    if (route.data['permissions']) {

      const routePermission = route.data['permissions'];

      const { gmail, permissions:userPermissions } = authService.getUser();
      if (gmail === '') {
        return false;
      }

      const hasPermission:boolean = routePermission.some((permission:any) => userPermissions.includes(permission));

      return hasPermission;
    }
  }

  return true;
};
