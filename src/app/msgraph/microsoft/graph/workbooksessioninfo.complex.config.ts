import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.complex';
import { WorkbookSessionInfoModel } from './workbooksessioninfo.model';
import { WorkbookSessionInfoCollection } from './workbooksessioninfo.collection';
//#endregion

export const WorkbookSessionInfoConfig = {
  name: "workbookSessionInfo",
  model: WorkbookSessionInfoModel,
  collection: WorkbookSessionInfoCollection,
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    persistChanges: {type: 'Edm.Boolean'}
  }
} as StructuredTypeConfig<WorkbookSessionInfo>;