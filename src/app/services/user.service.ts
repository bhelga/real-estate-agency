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

    register(user: User) {
        return this.http.post(`User/create`, user);
    }

    delete(id: number) {
        return this.http.delete(`User/delete/${id}`);
    }
}