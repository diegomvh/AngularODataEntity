import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

export interface WorkbookNamedItem extends Entity {
  //#region ODataApi Properties
  comment?: string;
  name?: string;
  scope: string;
  type?: string;
  value?: Json;
  visible: boolean;
  worksheet?: WorkbookWorksheet;
  //#endregion
}