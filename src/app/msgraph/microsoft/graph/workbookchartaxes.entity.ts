import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartAxisModel } from './workbookchartaxis.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartAxisCollection } from './workbookchartaxis.collection';
//#endregion

export interface WorkbookChartAxes extends Entity {
  //#region ODataApi Properties
  categoryAxis?: WorkbookChartAxis;
  seriesAxis?: WorkbookChartAxis;
  valueAxis?: WorkbookChartAxis;
  //#endregion
}