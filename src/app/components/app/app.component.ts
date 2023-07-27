import {Component} from '@angular/core';
import {UsersService} from "../../data/users.service";
import {MatDialog} from "@angular/material/dialog";
import {AddUserModalComponent} from "../add-user-modal";
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

  constructor(private service: UsersService,
              public dialog: MatDialog) {
  }

  handleChangeActive(id: string) {
    this.service.toggleActive(id)
  }

  handleAddUser(): void {
    const dialogRef = this.dialog.open(AddUserModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      const user = result as AddUserDto;
      if (!user) return;
      this.service.addUser(user)
    });
  }

}
