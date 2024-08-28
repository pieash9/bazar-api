import {
  CanActivate,
  ExecutionContext,
  Injectable,
  mixin,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

// @Injectable()
// export class AuthorizeGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}

//   canActivate(context: ExecutionContext): boolean {
//     const allowedRoles = this.reflector.get<string[]>(
//       'allowedRoles',
//       context.getHandler(),
//     );
//     const request: Request = context.switchToHttp().getRequest();
//     const result = request?.currentUser?.role
//       .map((role: string) => allowedRoles.includes(role))
//       .find((val: boolean) => val === true);

//     if (result) return true;
//     throw new UnauthorizedException('Sorry, you do not have permission!');
//   }
// }

export const AuthorizeGuard = (allowedRoles: string[]) => {
  class RolesGuardMixin implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
      const request: Request = context.switchToHttp().getRequest();
      const result = request?.currentUser?.role
        .map((role: string) => allowedRoles.includes(role))
        .find((val: boolean) => val === true);

      if (result) return true;
      throw new UnauthorizedException('Sorry, you do not have permission!');
    }
  }
  const guard = mixin(RolesGuardMixin);
  return guard;
};
