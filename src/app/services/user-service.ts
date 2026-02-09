import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
    apiUrl = "https://dummyjson.com/users/";
    users:any[] = [];
    constructor (private http: HttpClient){}
    getUsers(){
      return this.http.get<any[]>(this.apiUrl);
    }
    getUser(userId:Number){
      return this.http.get<any[]>(this.apiUrl+userId);
    }

    
}
