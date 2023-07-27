import {Component} from '@angular/core';
import {UsersService} from "../../data/users.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  users$ = this.service.getAllUsers()

  constructor(private service: UsersService) {
  }

  handleChangeActive(id: string) {
    this.service.toggleActive(id)
  }
}
