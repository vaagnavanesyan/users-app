import {Component} from '@angular/core';
import {UsersService} from "../../data/users.service";
import {AddUserDto} from "../../types/add-user-dto";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  columnsToDisplay = ['id', 'name', 'active'];
  users$ = this.service.getAllUsers()
  canAddUsers$ = this.service.canAddUsers$;
  isModalOpen = false;

  constructor(private service: UsersService) {
  }

  handleChangeActive(id: string) {
    this.service.toggleActive(id)
  }

  handleModalClose(user?: AddUserDto) {
    this.isModalOpen = false;
    if (user) {
      this.service.addUser(user)
    }
  }

}
