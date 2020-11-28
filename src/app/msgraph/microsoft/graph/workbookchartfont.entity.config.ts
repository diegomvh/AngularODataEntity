import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export const WorkbookChartFontConfig = {
  name: "workbookChartFont",
  base: "microsoft.graph.entity",
  model: WorkbookChartFontModel,
  collection: WorkbookChartFontCollection,
  annotations: [],
  fields: {
    bold: {type: 'Edm.Boolean'},
    color: {type: 'Edm.String'},
    italic: {type: 'Edm.Boolean'},
    name: {type: 'Edm.String'},
    size: {type: 'Edm.Double'},
    underline: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookChartFont>;