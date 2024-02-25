import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable()
export class HeroInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('paso por interceptor')
    return next.handle(req).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
