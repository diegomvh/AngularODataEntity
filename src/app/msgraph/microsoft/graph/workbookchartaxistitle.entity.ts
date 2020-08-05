import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
//#endregion

export interface WorkbookChartAxisTitle extends Entity {
  //#region ODataApi Properties
  text?: string;
  visible: boolean;
  format?: WorkbookChartAxisTitleFormat;
  //#endregion
}