import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookFilterCriteria } from './workbookfiltercriteria.entity';
import { WorkbookFilterCriteriaModel } from './workbookfiltercriteria.model';
import { EntityModel } from './entity.model';
import { WorkbookFilterCriteriaCollection } from './workbookfiltercriteria.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookFilter extends Entity {
  //#region ODataApi Properties
  criteria?: WorkbookFilterCriteria;
  //#endregion
}