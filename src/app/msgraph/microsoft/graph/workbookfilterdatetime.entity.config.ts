import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFilterDatetime } from './workbookfilterdatetime.entity';
//#endregion

export const WorkbookFilterDatetimeConfig = {
  name: "workbookFilterDatetime",
  annotations: [],
  fields: {
    date: {type: 'Edm.String'},
    specificity: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookFilterDatetime>;