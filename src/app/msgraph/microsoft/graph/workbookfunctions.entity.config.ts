import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFunctions } from './workbookfunctions.entity';
//#endregion

export const WorkbookFunctionsConfig = {
  name: "workbookFunctions",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookFunctions>;