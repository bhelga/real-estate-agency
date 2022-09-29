import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(environment.API_URL + `User/get`);
    }

    getById(id: number) {
        return this.http.get<User>(environment.API_URL + `User/get/${id}`);
    }

    register(user: User) {
        return this.http.post(environment.API_URL + `User/create`, user);
    }

    delete(id: number) {
        return this.http.delete(environment.API_URL + `User/delete/${id}`);
    }
}