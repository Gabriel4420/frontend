import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map, Observable, tap } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url: string = `https://backend-contacts-test.herokuapp.com/placeholder`

  constructor(private http: HttpClient) {}

  get apiResult(): Observable<any> {
    return this.http.get<any>(this.url).pipe(tap((res) => res))
  }
}
