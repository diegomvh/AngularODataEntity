import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
//#endregion

export interface WorkbookChartGridlinesFormat extends Entity {
  //#region ODataApi Properties
  line?: WorkbookChartLineFormat;
  //#endregion
}