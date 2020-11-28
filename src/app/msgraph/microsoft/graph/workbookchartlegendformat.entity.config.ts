import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
import { WorkbookChartLegendFormatModel } from './workbookchartlegendformat.model';
import { WorkbookChartLegendFormatCollection } from './workbookchartlegendformat.collection';
//#endregion

export const WorkbookChartLegendFormatConfig = {
  name: "workbookChartLegendFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartLegendFormatModel,
  collection: WorkbookChartLegendFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartLegendFormat>;