import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeReference } from './workbookrangereference.entity';
//#endregion

export const WorkbookRangeReferenceConfig = {
  name: "WorkbookRangeReference",
  annotations: [],
  fields: {
    address: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeReference>;