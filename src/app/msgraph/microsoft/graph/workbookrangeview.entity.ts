import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
//#endregion

export interface WorkbookRangeView extends Entity {
  //#region ODataApi Properties
  cellAddresses?: Json;
  columnCount: number;
  formulas?: Json;
  formulasLocal?: Json;
  formulasR1C1?: Json;
  index: number;
  numberFormat?: Json;
  rowCount: number;
  text?: Json;
  valueTypes?: Json;
  values?: Json;
  rows?: WorkbookRangeView[];
  //#endregion
}