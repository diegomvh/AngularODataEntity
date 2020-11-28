import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFilterDatetime } from './workbookfilterdatetime.entity';
import { WorkbookFilterDatetimeModel } from './workbookfilterdatetime.model';
import { WorkbookFilterDatetimeCollection } from './workbookfilterdatetime.collection';
//#endregion

export const WorkbookFilterDatetimeConfig = {
  name: "workbookFilterDatetime",
  model: WorkbookFilterDatetimeModel,
  collection: WorkbookFilterDatetimeCollection,
  annotations: [],
  fields: {
    date: {type: 'Edm.String'},
    specificity: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookFilterDatetime>;