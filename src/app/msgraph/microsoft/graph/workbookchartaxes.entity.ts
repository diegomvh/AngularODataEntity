import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
//#endregion

export interface WorkbookChartAxes extends Entity {
  //#region ODataApi Properties
  categoryAxis?: WorkbookChartAxis;
  seriesAxis?: WorkbookChartAxis;
  valueAxis?: WorkbookChartAxis;
  //#endregion
}