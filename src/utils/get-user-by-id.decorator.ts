import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCurrentUserBYId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user?.sub;
  },
);