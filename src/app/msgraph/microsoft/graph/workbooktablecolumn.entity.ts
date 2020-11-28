import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookFilter } from './workbookfilter.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookFilterModel } from './workbookfilter.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookFilterCollection } from './workbookfilter.collection';
//#endregion

export interface WorkbookTableColumn extends Entity {
  //#region ODataApi Properties
  index: number;
  name?: string;
  values?: Json;
  filter?: WorkbookFilter;
  //#endregion
}