import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ENVIRONMENT, STATUS, ENVIRONMENT_INITIALS } from '../constant.config';
import { SlbDropdownOption } from '@slb-dls/angular-material/dropdown';


@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent {

  applicationFilterControl:FormControl = new FormControl();
  serverFilterControl:FormControl = new FormControl();
  windowStatusOptions: SlbDropdownOption[] = STATUS;
  environmentOptions: SlbDropdownOption[] = ENVIRONMENT;
  windowStatusSelected: any = [];

  applicationStatusSelected(status:any){
    console.log(status)

  }

}
