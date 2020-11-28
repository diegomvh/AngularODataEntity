import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookSortField } from './workbooksortfield.complex';
import { WorkbookSortFieldModel } from './workbooksortfield.model';
import { EntityModel } from './entity.model';
import { WorkbookSortFieldCollection } from './workbooksortfield.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookTableSort extends Entity {
  //#region ODataApi Properties
  fields?: WorkbookSortField[];
  matchCase: boolean;
  method: string;
  //#endregion
}