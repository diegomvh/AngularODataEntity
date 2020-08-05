import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
//#endregion

export interface WorkbookChartAxisTitleFormat extends Entity {
  //#region ODataApi Properties
  font?: WorkbookChartFont;
  //#endregion
}