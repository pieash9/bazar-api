import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class AuthorizeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowedRoles = this.reflector.get(
      'allowedRoles',
      context.getHandler(),
    );
    const request: Request = context.switchToHttp().getRequest();
    const result = request?.currentUser?.role.map((role) =>
      allowedRoles.includes(),
    );
  }
}
