import { Component, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SlbDropdownOption } from '@slb-dls/angular-material/dropdown';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const sampleData = [
  {
    "CAMId" : "CAM1",
    "ApplicationName" : "BDT",
    "RequestType" : "Migration",
    "RequestSubType" : "Iaas-Migration",
    "Environment" : "Production",
    "Status" : "InProgress",
    "AssignedTo" : "Vikshit"
  },
  {
    "CAMId" : "CAM2",
    "ApplicationName" : "SLB Protheus",
    "RequestType" : "Migration",
    "RequestSubType" : "Paas-Migration",
    "Environment" : "Non-Production",
    "Status" : "InProgress",
    "AssignedTo" : "Paulo"
  },
  {
    "CAMId" : "CAM3",
    "ApplicationName" : "CAM",
    "RequestType" : "Modernization",
    "RequestSubType" : "App-Modernization",
    "Environment" : "Non-Production",
    "Status" : "InProgress",
    "AssignedTo" : "Priyanka"
  }
]

@Component({
  selector: 'app-cam-details-view',
  templateUrl: './cam-details-view.component.html',
  styleUrls: ['./cam-details-view.component.css']
})

export class CamDetailsViewComponent implements OnChanges{

  displayedColumns : string[] = ["CamId" , "AppShortName","RequestType","Environment","Status","AssignedTo"];
  dataSource = new MatTableDataSource(sampleData);
  public camDetailsFilter_ViewBy: SlbDropdownOption[] = [
    { value: '15days', viewText: '15 Days' },
    { value: '1month', viewText: '1 month' },
    { value: '1year', viewText: '1 year' }
];

selectedViewFilter = this.camDetailsFilter_ViewBy[0].value;

@Input() exportCamDetailsData : boolean;

constructor(){}

ngOnChanges(changes: SimpleChanges): void {
  
  if(this.exportCamDetailsData){
    this.exportData();
  }
}
 
changeCamViewFilter(options:any){

  this.selectedViewFilter = options.value;
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

exportData(){

  let xlsxEvent: any = [];

    sampleData.forEach(element => {
      
      const row = {

        CAM_ID : element.CAMId,
        ApplicationName : element.ApplicationName,
        RequestType : element.RequestType,
        Environment : element.Environment,
        Status : element.Status,
        AssignedTo : element.AssignedTo
      }

      xlsxEvent.push(row);
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(xlsxEvent);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, 'CamDetails' + new Date().getTime() + EXCEL_EXTENSION);
}

}
