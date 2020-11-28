import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookFilter } from './workbookfilter.entity';
import { WorkbookFilterModel } from './workbookfilter.model';
import { WorkbookFilterCollection } from './workbookfilter.collection';
//#endregion

export const WorkbookFilterConfig = {
  name: "workbookFilter",
  base: "microsoft.graph.entity",
  model: WorkbookFilterModel,
  collection: WorkbookFilterCollection,
  annotations: [],
  fields: {
    criteria: {type: 'graph.workbookFilterCriteria'}
  }
} as EntityConfig<WorkbookFilter>;