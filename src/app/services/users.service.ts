import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { ListUser } from '../shared/list-user.model';
import { UserFull } from '../shared/user-full.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  baseUrl = 'https://dummyapi.io/data/v1/'
  token: string = '6452a8908edea0eafd918058'
  headers =  new HttpHeaders().set('app-id', this.token)

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(page: number): Observable<ListUser> {
    let params = new HttpParams().set('page', page)
    return this.httpClient.get<ListUser>(
      this.baseUrl + 'user', {headers: this.headers, params: params})
  }

  UpdateUser(id: string, body: UserFull): Observable<UserFull>{
    return this.httpClient.put<UserFull>(this.baseUrl + `user/${id}`, body, {headers: this.headers})
  }
  createUser(body: UserFull): Observable<UserFull>{
    return this.httpClient.post<UserFull>(this.baseUrl + `user/create`, body, {headers: this.headers})
  }

  getUserById(id: string): Observable<UserFull>{
    return this.httpClient.get<UserFull>(this.baseUrl + `user/${id}`, {headers: this.headers})
  }
  deleteUser(id: string): Observable<any>{
    return this.httpClient.delete(this.baseUrl + `user/${id}`, {headers: this.headers})
  }
}
