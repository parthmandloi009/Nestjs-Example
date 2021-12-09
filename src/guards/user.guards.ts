import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const {role} = req.body;
    if(role && role === "Admin"){
        return true;
    }
    throw new HttpException('Users not authorized.',HttpStatus.UNAUTHORIZED)
    
  }
}