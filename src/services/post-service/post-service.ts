import { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';
import { http } from 'src/http/axios-instance';

export function getPosts(): Observable<AxiosResponse<any>> {
    return from(http.get('/posts'));
}