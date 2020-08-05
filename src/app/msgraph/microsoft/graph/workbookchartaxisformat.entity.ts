import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartAxisFormat extends Entity {
  //#region ODataApi Properties
  font?: WorkbookChartFont;
  line?: WorkbookChartLineFormat;
  //#endregion
}