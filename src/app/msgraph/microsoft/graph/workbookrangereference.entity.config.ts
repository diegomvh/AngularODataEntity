import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeReference } from './workbookrangereference.entity';
//#endregion

export const WorkbookRangeReferenceConfig = {
  name: "workbookRangeReference",
  annotations: [],
  fields: {
    address: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeReference>;