import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  
  // Clone the request to add the authentication header.
  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${localStorage.getItem('auth-token')}`),
  });
  
  return next(newReq);
};
