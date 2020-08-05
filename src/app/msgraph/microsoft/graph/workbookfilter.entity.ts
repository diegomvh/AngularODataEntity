import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.entity';
//#endregion

export interface WorkbookFilter extends Entity {
  //#region ODataApi Properties
  criteria?: WorkbookFilterCriteria;
  //#endregion
}