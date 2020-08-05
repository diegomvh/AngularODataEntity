import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.entity';
//#endregion

export const WorkbookIconConfig = {
  name: "workbookIcon",
  annotations: [],
  fields: {
    index: {type: 'Edm.Int32', nullable: false},
    set: {type: 'Edm.String', nullable: false}
  }
} as EntityConfig<WorkbookIcon>;