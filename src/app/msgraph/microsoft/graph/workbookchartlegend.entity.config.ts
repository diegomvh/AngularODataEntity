import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartLegendModel } from './workbookchartlegend.model';
import { WorkbookChartLegendCollection } from './workbookchartlegend.collection';
//#endregion

export const WorkbookChartLegendConfig = {
  name: "workbookChartLegend",
  base: "microsoft.graph.entity",
  model: WorkbookChartLegendModel,
  collection: WorkbookChartLegendCollection,
  annotations: [],
  fields: {
    overlay: {type: 'Edm.Boolean'},
    position: {type: 'Edm.String'},
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartLegendFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartLegend>;