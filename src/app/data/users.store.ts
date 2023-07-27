import {EntityState, EntityStore, Store, StoreConfig} from '@datorama/akita';
import {User} from "../types";
import {Injectable} from "@angular/core";

export interface UsersState extends EntityState<User, string> {
}

export function createInitialState(): UsersState {
  return {
    entities: {
      '1': {
        id: '1',
        name: 'John Doe',
        active: true
      },
      '2':
        {
          id: '2',
          name: 'Jane Doe',
          active: true
        },
      '3':
        {
          id: '3',
          name: 'Jake Dough',
          active: false
        },
    },
    ids:['1', '2','3']
  }
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'users'})
export class UsersStore extends EntityStore<UsersState> {
  constructor() {
    super(createInitialState());
  }
}
