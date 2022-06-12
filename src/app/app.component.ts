import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component'
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-app';

  dataForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    surName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    adress: new FormControl('', [Validators.required]),
    eMail: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    postCode: new FormControl('', [Validators.required])
  })

  constructor (public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(LogoutDialogComponent, {data: {name: ''}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
