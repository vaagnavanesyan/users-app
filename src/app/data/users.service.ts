import {Injectable} from "@angular/core";
import {UsersQuery} from "./users.query";
import {UsersStore} from "./users.store";

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(
    private usersStore: UsersStore,
    private usersQuery: UsersQuery) {
  }

  getAllUsers() {
    return this.usersQuery.selectAll()
  }

  toggleActive(id: string) {
    this.usersStore.update(id, user => {
      return {
        ...user,
        active: !user.active
      }
    })
  }
}
