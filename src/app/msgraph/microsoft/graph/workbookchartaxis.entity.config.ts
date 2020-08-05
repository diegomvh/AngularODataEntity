import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartAxis } from './workbookchartaxis.entity';
//#endregion

export const WorkbookChartAxisConfig = {
  name: "WorkbookChartAxis",
  base: "microsoft.graph.entity",
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
} as EntityConfig<WorkbookChartAxis>;