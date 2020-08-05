import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFilter } from './workbookfilter.entity';
//#endregion

export const WorkbookFilterConfig = {
  name: "workbookFilter",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    criteria: {type: 'graph.workbookFilterCriteria'}
  }
} as EntityConfig<WorkbookFilter>;