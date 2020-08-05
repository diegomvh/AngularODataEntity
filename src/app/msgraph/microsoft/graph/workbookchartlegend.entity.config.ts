import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLegend } from './workbookchartlegend.entity';
//#endregion

export const WorkbookChartLegendConfig = {
  name: "WorkbookChartLegend",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    overlay: {type: 'Edm.Boolean'},
    position: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartLegendFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartLegend>;