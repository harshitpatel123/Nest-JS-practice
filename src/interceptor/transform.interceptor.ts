import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    const sendManualResponse = false;
    if(sendManualResponse){
        return of({data:"this response is from interceptor"} as Response<T>);
  }
    return next.handle().pipe(map(data => ({ data })));
  }
}