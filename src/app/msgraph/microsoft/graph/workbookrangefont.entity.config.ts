import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookRangeFont } from './workbookrangefont.entity';
//#endregion

export const WorkbookRangeFontConfig = {
  name: "WorkbookRangeFont",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as EntityConfig<WorkbookRangeFont>;