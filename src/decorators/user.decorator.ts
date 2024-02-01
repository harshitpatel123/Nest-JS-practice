import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { user } from 'src/user/entity/user.entity';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.body;
    return  data ? user?.[data] : user;
  },
);