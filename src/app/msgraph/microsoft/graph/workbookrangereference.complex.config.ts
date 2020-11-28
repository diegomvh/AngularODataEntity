import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeReference } from './workbookrangereference.complex';
import { WorkbookRangeReferenceModel } from './workbookrangereference.model';
import { WorkbookRangeReferenceCollection } from './workbookrangereference.collection';
//#endregion

export const WorkbookRangeReferenceConfig = {
  name: "workbookRangeReference",
  model: WorkbookRangeReferenceModel,
  collection: WorkbookRangeReferenceCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeReference>;