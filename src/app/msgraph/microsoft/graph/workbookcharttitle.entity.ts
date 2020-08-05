import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
//#endregion

export interface WorkbookChartTitle extends Entity {
  //#region ODataApi Properties
  overlay?: boolean;
  text?: string;
  visible: boolean;
  format?: WorkbookChartTitleFormat;
  //#endregion
}