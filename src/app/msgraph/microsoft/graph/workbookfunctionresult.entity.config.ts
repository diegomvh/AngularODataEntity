import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFunctionResult } from './workbookfunctionresult.entity';
import { WorkbookFunctionResultModel } from './workbookfunctionresult.model';
import { WorkbookFunctionResultCollection } from './workbookfunctionresult.collection';
//#endregion

export const WorkbookFunctionResultConfig = {
  name: "workbookFunctionResult",
  base: "microsoft.graph.entity",
  model: WorkbookFunctionResultModel,
  collection: WorkbookFunctionResultCollection,
  annotations: [],
  fields: {
    error: {type: 'Edm.String'},
    value: {type: 'graph.Json'}
  }
} as EntityConfig<WorkbookFunctionResult>;