import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface applicationData{

  appName : string
}

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent {

  constructor(private dialogRef : MatDialogRef<ApplicationDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any ){}

    onNoClick(){
      this.dialogRef.close();
    }

}
