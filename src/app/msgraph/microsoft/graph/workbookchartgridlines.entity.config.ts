import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartGridlinesModel } from './workbookchartgridlines.model';
import { WorkbookChartGridlinesCollection } from './workbookchartgridlines.collection';
//#endregion

export const WorkbookChartGridlinesConfig = {
  name: "workbookChartGridlines",
  base: "microsoft.graph.entity",
  model: WorkbookChartGridlinesModel,
  collection: WorkbookChartGridlinesCollection,
  annotations: [],
  fields: {
    visible: {type: 'Edm.Boolean', nullable: false},
    format: {type: 'graph.workbookChartGridlinesFormat', navigation: true}
  }
} as EntityConfig<WorkbookChartGridlines>;