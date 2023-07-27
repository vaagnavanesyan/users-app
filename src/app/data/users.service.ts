import {Injectable} from "@angular/core";
import {UsersQuery} from "./users.query";

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(private usersQuery: UsersQuery) {
  }

  getAllUsers() {
    return this.usersQuery.selectAll()
  }
}
