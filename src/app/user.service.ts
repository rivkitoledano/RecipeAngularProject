import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entities/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}
  
  getUserList(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7265/api/User')}

  getUserById(id:number): Observable<User> {
    return this.http.get<User>(`https://localhost:7265/api/User/${id}`)}

  setNewUser(user: any): Observable<any> {
    return this.http.post<any>('https://localhost:7265/api/User', user);}

    
  updateUser(user:User,id:number): Observable<User> {
    return this.http.put(`https://localhost:7265/api/User/${id}`,user)}
}