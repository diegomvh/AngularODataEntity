import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartAreaFormatModel } from './workbookchartareaformat.model';
import { WorkbookChartAreaFormatCollection } from './workbookchartareaformat.collection';
//#endregion

export const WorkbookChartAreaFormatConfig = {
  name: "workbookChartAreaFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartAreaFormatModel,
  collection: WorkbookChartAreaFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAreaFormat>;