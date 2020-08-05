import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

export interface WorkbookChartLegendFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
  //#endregion
}