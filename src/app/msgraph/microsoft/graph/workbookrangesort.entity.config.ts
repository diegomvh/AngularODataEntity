import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeSort } from './workbookrangesort.entity';
//#endregion

export const WorkbookRangeSortConfig = {
  name: "workbookRangeSort",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<WorkbookRangeSort>;