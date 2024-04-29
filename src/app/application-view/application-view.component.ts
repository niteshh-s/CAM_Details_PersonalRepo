import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SlbDropdownOption, SlbDropdownOptionGroup } from '@slb-dls/angular-material/dropdown';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { MatDialog } from '@angular/material/dialog';
import { ApplicationDetailsComponent } from '../application-details/application-details.component';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

const   sampleData = [{
  "SSRID": "EAR-AA-7690",
  "ApplicationName": " TLM-HFE",
  "ApplicationShortName": " HFE-TLM",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Continue to operate - As is",
  "OrgUnit": "Technology",
  "Portfolio": "Technology - HFE",
  "ValueStream": "A2R (Acquire To Retire)",
  "ApplicationType": "Homegrown",
  "BusinessImportance": "Tier3",
  "SRE": [],
  "ITPM": [
    {
      "Alias": "boling3",
      "Name": "Brian Boling"
    }
  ],
  "BPM": [
    {
      "Alias": "boling3",
      "Name": "Brian Boling"
    }
  ],
  "SolutionArchitect": [],
  "LeadArchitect": [
    {
      "Alias": "ASingh62",
      "Name": "Abhishek Singh"
    }
  ],
  "DevopsManager": [],
  
  "ApplicationStatus": "Active"
},
{
  
  "SSRID": "EAR-AA-24826",
  "ApplicationName": "Inductive Automation Ignition (IT2015)",
  "ApplicationShortName": " Ignition (IT2015)",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Development & Deployment - Ongoing",
  "OrgUnit": "Technology",
  "Portfolio": "Technology-Business Systems",
  "ValueStream": "TECH (Technology)",
  "ApplicationType": "Homegrown",
  "BusinessImportance": "Tier3",
  "SRE": [],
  "ITPM": [
    {
      "Alias": "DDandrea",
      "Name": "Denis Dandrea"
    }
  ],
  "BPM": [
    {
      "Alias": "Sbailoni",
      "Name": "Sergio Bailoni"
    }
  ],
  "SolutionArchitect": [
    {
      "Alias": "DDandrea",
      "Name": "Denis Dandrea"
    }
  ],
  "LeadArchitect": [
    {
      "Alias": "ASingh62",
      "Name": "Abhishek Singh"
    }
  ],
  "DevopsManager": [
    {
      "Alias": "DDandrea",
      "Name": "Denis Dandrea"
    }
  ],
 
  "ApplicationStatus": "Active"
},
{
  
  "SSRID": "EAR-AA-25987",
  "ApplicationName": "InControl - Tooling Shop app for Plant A714 - BRZ",
  "ApplicationShortName": " InControl - FRMT PowerApp",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Development & Deployment - Ongoing",
  "OrgUnit": "OAT (Offshore Atlantic)",
  "Portfolio": "BRZ Geounit - Digital Cell",
  "ValueStream": "TECH (Technology)",
  "ApplicationType": "Homegrown",
  "BusinessImportance": "Unknown",
  "SRE": [],
  "ITPM": [
    {
      "Alias": "JSobral",
      "Name": "Julia Sobral"
    }
  ],
  "BPM": [
    {
      "Alias": "ACardoso10",
      "Name": "Anderson Assuncao Cardoso"
    }
  ],
  "SolutionArchitect": [],
  "LeadArchitect": [
    {
      "Alias": "DSutradhar",
      "Name": "Dipankar Sutradhar"
    }
  ],
  "DevopsManager": [],
 
  "ApplicationStatus": "Active"
},
{
  
  "SSRID": "EAR-AA-8989",
  "ApplicationName": "MPD Software for Dynamic Pressure Controls",
  "ApplicationShortName": "'@balance Control",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Decommission - In Progress",
  "OrgUnit": "Technology Lifecycle Management",
  "Portfolio": "TLM - Applications",
  "ValueStream": "A2R (Acquire To Retire)",
  "ApplicationType": null,
  "BusinessImportance": "Tier3",
  "SRE": [],
  "ITPM": [
    {
      "Alias": "SKatanguri",
      "Name": "Suman Reddy Katanguri"
    }
  ],
  "BPM": [
    {
      "Alias": "BDow",
      "Name": "Blaine Dow"
    }
  ],
  "SolutionArchitect": [],
  "LeadArchitect": [
    {
      "Alias": "lacy2",
      "Name": "Marty Lacy"
    }
  ],
  "DevopsManager": [],
 
  "ApplicationStatus": "Decommissioned"
},
{
  
  "SSRID": "EAR-AA-2512",
  "ApplicationName": "@Risk",
  "ApplicationShortName": "'@Risk",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Decommission - Planned",
  "OrgUnit": "IT SAP",
  "Portfolio": "ITT SAP DevOps H2R",
  "ValueStream": "H2R (Hire To Retire)",
  "ApplicationType": "Homegrown",
  "BusinessImportance": "Tier3",
  "SRE": [
    {
      "Alias": "RMalik3",
      "Name": "Rohit Malik"
    },
    {
      "Alias": "SKumari7",
      "Name": "Sneha Kumari"
    },
    {
      "Alias": "UVats",
      "Name": "Urja Vats"
    }
  ],
  "ITPM": [
    {
      "Alias": "MAli32",
      "Name": "Muhammadali"
    }
  ],
  "BPM": [
    {
      "Alias": "PEvbomoen",
      "Name": "Philip Irele Evbomoen"
    }
  ],
  "SolutionArchitect": [
    {
      "Alias": "LDingreja",
      "Name": "Litesh Dingreja"
    }
  ],
  "LeadArchitect": [
    {
      "Alias": "challappam",
      "Name": "Murli Challappa"
    }
  ],
  "DevopsManager": [
    {
      "Alias": "SGautam4",
      "Name": "Swapna Gautam"
    }
  ],
  
  "ApplicationStatus": "Active"
},
{
  
  "SSRID": "EAR-AA-3768",
  "ApplicationName": ".Net Charting",
  "ApplicationShortName": ".Net Charting",
  "ApplicationUsers": "SLB Only",
  "ApplicationState": "Decommission - In Progress",
  "OrgUnit": "IT SAP",
  "Portfolio": "ITE SAP Cameron (D2D, A2R, MFG, ECM, DEM)",
  "ValueStream": "Enterprise Enablement",
  "ApplicationType": null,
  "BusinessImportance": "Tier3",
  "SRE": [
    {
      "Alias": "NMoideen",
      "Name": "Moideen Naseer"
    }
  ],
  "ITPM": [
    {
      "Alias": "LMaximo",
      "Name": "Luciano Maximo"
    }
  ],
  "BPM": [
    {
      "Alias": "LMaximo",
      "Name": "Luciano Maximo"
    }
  ],
  "SolutionArchitect": [],
  "LeadArchitect": [
    {
      "Alias": "DJohnston19",
      "Name": "David Johnston"
    }
  ],
  "DevopsManager": [],
  
  "ApplicationStatus": "Decommissioned"
}]

@Component({
  selector: 'app-application-view',
  templateUrl: './application-view.component.html',
  styleUrls: ['./application-view.component.css']
})
export class ApplicationViewComponent {

  pageViewOptions:SlbDropdownOption[]=[
    {value : "applicationView" , viewText : "Application Details"},
    {value : "CamDetailsView" , viewText : "CAM Details"}
  ];


  displayedColumns : string[] = ['SSRID',"ApplicationShortName","Tier","ApplicationState","OrgUnit","Portfolio"];
  dataSource = new MatTableDataSource(sampleData);
  pageTitle: string;
  pageView:string;
  exportCamDetailsData: boolean;
  
  constructor(private dialog : MatDialog){

    this.pageView = this.pageViewOptions[0].value;
    this.pageTitle = this.pageViewOptions[0].viewText;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onViewChange(){
    if(this.pageView == this.pageViewOptions[0].value)
    {
      this.pageView = this.pageViewOptions[1].value;
      this.pageTitle = this.pageViewOptions[1].viewText;
    }
    else
    {
      this.pageView = this.pageViewOptions[0].value;
      this.pageTitle = this.pageViewOptions[0].viewText;
      this.exportCamDetailsData = false;
    }
  }

  exportData(){

    if(this.pageView == this.pageViewOptions[1].value)
      this.exportCamDetailsData = true;

    else{

      let xlsxEvent: any = [];

    sampleData.forEach(element => {
      
      const row = {

        SSRID : element.SSRID,
        ApplicationName : element.ApplicationShortName,
        Tier : element.BusinessImportance,
        ApplicationState : element.ApplicationState,
        OrgUnit : element.OrgUnit,
        Portfolio : element.Portfolio
      }

      xlsxEvent.push(row);
    });

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(xlsxEvent);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, 'ApplicationDetails_Export' + new Date().getTime() + EXCEL_EXTENSION);
    }

    
  }

  showApplicationDetails(row:any){

    const dialogRef = this.dialog.open(ApplicationDetailsComponent, {

      width: '60%',
      data : row
    });

  }

}
