import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookSessionInfo } from './workbooksessioninfo.entity';
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
} as EntityConfig<WorkbookSessionInfo>;