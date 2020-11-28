import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookRangeViewModel } from './workbookrangeview.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookRangeViewCollection } from './workbookrangeview.collection';
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
  values?: Json;
  valueTypes?: Json;
  rows?: WorkbookRangeView[];
  //#endregion
}