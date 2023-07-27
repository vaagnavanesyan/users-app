import {Injectable} from "@angular/core";
import {UsersQuery} from "./users.query";
import {UsersStore} from "./users.store";
import {map, zip} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersService {
  constructor(
    private usersStore: UsersStore,
    private usersQuery: UsersQuery) {
  }

  hasLengthLT5$ = this.usersQuery.selectAll().pipe(
    map((users) => {
      return users.length < 5
    })
  )
  allUsersActive$ = this.usersQuery.selectAll()
    .pipe(
      map(e => e.every(user => user.active))
    )
  canAddUsers$ = zip([this.hasLengthLT5$, this.allUsersActive$])
    .pipe(
      map(([hasLengthLT5, allUsersActive]) => hasLengthLT5 && allUsersActive)
    )

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
