import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFunctions } from './workbookfunctions.entity';
//#endregion

export const WorkbookFunctionsConfig = {
  name: "WorkbookFunctions",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookFunctions>;