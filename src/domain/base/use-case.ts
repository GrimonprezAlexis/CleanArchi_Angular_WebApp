import { Observable } from 'rxjs';

export interface UseCase<I, O> {
  execute(params: I): Observable<O>;
}
