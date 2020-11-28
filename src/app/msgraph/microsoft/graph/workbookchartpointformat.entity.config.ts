import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { WorkbookChartPointFormatModel } from './workbookchartpointformat.model';
import { WorkbookChartPointFormatCollection } from './workbookchartpointformat.collection';
//#endregion

export const WorkbookChartPointFormatConfig = {
  name: "workbookChartPointFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartPointFormatModel,
  collection: WorkbookChartPointFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartPointFormat>;