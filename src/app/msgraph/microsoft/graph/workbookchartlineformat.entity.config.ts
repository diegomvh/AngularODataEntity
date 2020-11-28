import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export const WorkbookChartLineFormatConfig = {
  name: "workbookChartLineFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartLineFormatModel,
  collection: WorkbookChartLineFormatCollection,
  annotations: [],
  fields: {
    color: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WorkbookChartLineFormat>;