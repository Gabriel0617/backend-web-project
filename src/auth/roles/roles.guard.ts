// src/auth/role.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const { user } = context.switchToHttp().getRequest();
    console.log(user)
    // Assuming the user object contains a 'role' property
    const allowedRoles = ['admin']; // Define your allowed roles here

    if (!allowedRoles.includes(user.user_role)) {
      throw new ForbiddenException(`Access denied due to insufficient permissions.`);
    }

    return true;
  }
}


