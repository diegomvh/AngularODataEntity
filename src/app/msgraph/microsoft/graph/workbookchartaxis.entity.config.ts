import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { WorkbookChartAxisModel } from './workbookchartaxis.model';
import { WorkbookChartAxisCollection } from './workbookchartaxis.collection';
//#endregion

export const WorkbookChartAxisConfig = {
  name: "workbookChartAxis",
  base: "microsoft.graph.entity",
  model: WorkbookChartAxisModel,
  collection: WorkbookChartAxisCollection,
  annotations: [],
  fields: {
    majorUnit: {type: 'graph.Json'},
    maximum: {type: 'graph.Json'},
    minimum: {type: 'graph.Json'},
    minorUnit: {type: 'graph.Json'},
    format: {type: 'graph.workbookChartAxisFormat', navigation: true},
    majorGridlines: {type: 'graph.workbookChartGridlines', navigation: true},
    minorGridlines: {type: 'graph.workbookChartGridlines', navigation: true},
    title: {type: 'graph.workbookChartAxisTitle', navigation: true}
  }
} as StructuredTypeConfig<WorkbookChartAxis>;