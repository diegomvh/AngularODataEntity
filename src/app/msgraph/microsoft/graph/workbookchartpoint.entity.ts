import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
//#endregion

export interface WorkbookChartPoint extends Entity {
  //#region ODataApi Properties
  value?: Json;
  format?: WorkbookChartPointFormat;
  //#endregion
}