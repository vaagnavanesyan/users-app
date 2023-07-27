import {Component} from '@angular/core';
import {User} from "../../types";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      active: true
    },
    {
      id: '2',
      name: 'Jane Doe',
      active: true
    },
    {
      id: '3',
      name: 'Jake Dough',
      active: false
    },
  ]
}
