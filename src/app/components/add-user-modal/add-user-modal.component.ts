import {Component, EventEmitter, Output} from '@angular/core';
import {AddUserDto} from "../../types/add-user-dto";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
})
export class AddUserModalComponent {
  model = new AddUserDto()
  @Output() close = new EventEmitter<AddUserDto | undefined>();


  handleSubmit() {
    this.close.emit(this.model)
  }

  handleClose() {
    this.close.emit()
  }

}
