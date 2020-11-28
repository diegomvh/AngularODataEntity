import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeSort } from './workbookrangesort.entity';
import { WorkbookRangeSortModel } from './workbookrangesort.model';
import { WorkbookRangeSortCollection } from './workbookrangesort.collection';
//#endregion

export const WorkbookRangeSortConfig = {
  name: "workbookRangeSort",
  base: "microsoft.graph.entity",
  model: WorkbookRangeSortModel,
  collection: WorkbookRangeSortCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookRangeSort>;