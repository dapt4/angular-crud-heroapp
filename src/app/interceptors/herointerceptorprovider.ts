import { Provider } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeroInterceptor } from "./herointerceptor.interceptor";

export const heroInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeroInterceptor,
  multi: true
}


