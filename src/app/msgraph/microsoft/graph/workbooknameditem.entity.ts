import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
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