import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
//#endregion

export interface WorkbookChartPointFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  //#endregion
}