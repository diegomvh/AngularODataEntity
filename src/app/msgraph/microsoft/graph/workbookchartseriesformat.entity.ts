import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartSeriesFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  line?: WorkbookChartLineFormat;
  //#endregion
}