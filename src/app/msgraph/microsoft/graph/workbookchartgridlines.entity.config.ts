import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
//#endregion

export const WorkbookChartGridlinesConfig = {
  name: "WorkbookChartGridlines",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartGridlinesFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartGridlines>;