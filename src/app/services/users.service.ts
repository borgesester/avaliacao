import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { first, Observable } from 'rxjs';
import { ListUser } from '../shared/list-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  baseUrl = 'https://dummyapi.io/data/v1/'
  token: string = '6452a8908edea0eafd918058'
  headers =  new HttpHeaders().set('app-id', this.token)
  body = {
    email: 'esterborges95@hotmail.com',
    firstName: 'Ester',
    lastName: 'Alvaro'
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getUsers(page: number): Observable<ListUser> {
    let params = new HttpParams().set('page', page)
    return this.httpClient.get<ListUser>(
      this.baseUrl + 'user', {headers: this.headers, params: params})
  }

  UpdateUser(): Observable<any>{
    const id = '60d0fe4f5311236168a109ca'
    return this.httpClient.put(this.baseUrl + `user/${id}`, this.body, {headers: this.headers})
  }
  createUser(): Observable<any>{
    return this.httpClient.post(this.baseUrl + `user/create`, this.body, {headers: this.headers})
  }

  getUserById(): Observable<any>{
    const id = '60d0fe4f5311236168a109ca'
    return this.httpClient.get(this.baseUrl + `user/${id}`, {headers: this.headers})
  }
  deleteUser(): Observable<any>{
    const id = '678c4fbf6fa25c4a84a15093'
    return this.httpClient.delete(this.baseUrl + `user/${id}`, {headers: this.headers})
  }
}
