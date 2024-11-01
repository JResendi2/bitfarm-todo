import type { HttpInterceptorFn } from '@angular/common/http';

export const testInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("interceptor", req);
  return next(req);
};
