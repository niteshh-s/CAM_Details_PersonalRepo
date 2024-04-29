import { SlbDropdownOption } from "@slb-dls/angular-material/dropdown";
export const ENVIRONMENT_INITIALS: any  =  [
  {
    viewText: 'U',
    value: 'Unknown',
  },
  {
    viewText: 'D',
    value: 'Development'
  },
  {
    viewText: 'T',
    value: 'Test'
  },
  {
    viewText: 'Q',
    value: 'Qualification'
  },
  {
    viewText: 'PP',
    value: 'Preproduction'
  },
  {
    viewText: 'PR',
    value: 'Production'
  },
  {
    viewText: 'ST',
    value: 'Staging'
  },
  {
    viewText: 'SB',
    value: 'StandbyBackup'
  },
  {
    viewText: 'DR',
    value: 'DisasterRecoveryDR'
  },
  {
    viewText: 'NP',
    value: 'NonProduction'
  }
];
export const ENVIRONMENT: SlbDropdownOption[]  =  [
    // {
    //   viewText: 'Unknown',
    //   value: 0
    // },
    {
      viewText: 'Development',
      value: 'Development'
    },
    {
      viewText: 'Test',
      value: 'Test'
    },
    {
      viewText: 'Qualification',
      value: 'Qualification'
    },
    {
      viewText: 'Pre-Production',
      value: 'Preproduction'
    },
    {
      viewText: 'Production',
      value: 'Production'
    },
    {
      viewText: 'Staging',
      value: 'Staging'
    },
    {
      viewText: 'StandbyBackup',
      value: 'StandbyBackup'
    },
    // {
    //   viewText: 'DisasterRecoveryDR',
    //   value: 8
    // } 
    {
      viewText: 'Non-Production',
      value: 'NonProduction'
    },
    {
      viewText: 'Unknown',
      value: 'Unknown'
    }
];
export const STATUS = [
  { viewText: 'Active', value: 'Active'},
  { viewText: 'Decomissioned', value: 'Decomissioned'}
];
