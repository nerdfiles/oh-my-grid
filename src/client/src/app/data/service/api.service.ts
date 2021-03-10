import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  create(body: Object): Observable<any> {
    return this.httpClient.post('http://localhost:4000/api/auth/register', body)
  }
}
