import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFunctionResult } from './workbookfunctionresult.entity';
//#endregion

export const WorkbookFunctionResultConfig = {
  name: "WorkbookFunctionResult",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    error: {type: 'Edm.String'},
    value: {type: 'graph.Json'}
  }
} as EntityConfig<WorkbookFunctionResult>;