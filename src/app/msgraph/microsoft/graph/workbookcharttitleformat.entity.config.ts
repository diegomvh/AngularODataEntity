import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
import { WorkbookChartTitleFormatModel } from './workbookcharttitleformat.model';
import { WorkbookChartTitleFormatCollection } from './workbookcharttitleformat.collection';
//#endregion

export const WorkbookChartTitleFormatConfig = {
  name: "workbookChartTitleFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartTitleFormatModel,
  collection: WorkbookChartTitleFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartTitleFormat>;