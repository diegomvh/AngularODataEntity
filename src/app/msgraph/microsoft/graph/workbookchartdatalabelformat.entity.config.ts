import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
import { WorkbookChartDataLabelFormatModel } from './workbookchartdatalabelformat.model';
import { WorkbookChartDataLabelFormatCollection } from './workbookchartdatalabelformat.collection';
//#endregion

export const WorkbookChartDataLabelFormatConfig = {
  name: "workbookChartDataLabelFormat",
  base: "microsoft.graph.entity",
  model: WorkbookChartDataLabelFormatModel,
  collection: WorkbookChartDataLabelFormatCollection,
  annotations: [],
  fields: {
    fill: {type: 'graph.workbookChartFill', navigation: true},
    font: {type: 'graph.workbookChartFont', navigation: true}
  }
} as EntityConfig<WorkbookChartDataLabelFormat>;