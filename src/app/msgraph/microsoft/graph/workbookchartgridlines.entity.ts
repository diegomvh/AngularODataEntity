import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
//#endregion

export interface WorkbookChartGridlines extends Entity {
  //#region ODataApi Properties
  visible: boolean;
  format?: WorkbookChartGridlinesFormat;
  //#endregion
}