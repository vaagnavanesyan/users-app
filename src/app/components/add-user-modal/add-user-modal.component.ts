import {Component} from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AddUserDto} from "../../types/add-user-dto";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatInputModule, FormsModule, MatButtonModule, MatSlideToggleModule, ReactiveFormsModule],

})
export class AddUserModalComponent {
  name = new FormControl('', [Validators.required]);
  model = new AddUserDto()

  constructor(
    private dialogRef: MatDialogRef<AddUserModalComponent>
  ) {
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}
