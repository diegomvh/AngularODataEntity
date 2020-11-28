import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeFont } from './workbookrangefont.entity';
import { WorkbookRangeFontModel } from './workbookrangefont.model';
import { WorkbookRangeFontCollection } from './workbookrangefont.collection';
//#endregion

export const WorkbookRangeFontConfig = {
  name: "workbookRangeFont",
  base: "microsoft.graph.entity",
  model: WorkbookRangeFontModel,
  collection: WorkbookRangeFontCollection,
  annotations: [],
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookRangeFont>;