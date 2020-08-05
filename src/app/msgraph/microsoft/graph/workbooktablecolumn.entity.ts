import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookFilter } from './workbookfilter.entity';
//#endregion

export interface WorkbookTableColumn extends Entity {
  //#region ODataApi Properties
  index: number;
  name?: string;
  values?: Json;
  filter?: WorkbookFilter;
  //#endregion
}