import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookFunctionsModel } from './workbookfunctions.model';
import { WorkbookFunctionsCollection } from './workbookfunctions.collection';
//#endregion

export const WorkbookFunctionsConfig = {
  name: "workbookFunctions",
  base: "microsoft.graph.entity",
  model: WorkbookFunctionsModel,
  collection: WorkbookFunctionsCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookFunctions>;