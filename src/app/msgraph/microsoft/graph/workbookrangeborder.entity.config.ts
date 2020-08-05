import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
//#endregion

export const WorkbookRangeBorderConfig = {
  name: "WorkbookRangeBorder",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    color: {type: 'Edm.String'},
    sideIndex: {type: 'Edm.String'},
    style: {type: 'Edm.String'},
    weight: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeBorder>;