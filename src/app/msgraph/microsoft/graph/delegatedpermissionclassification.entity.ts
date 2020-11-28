import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PermissionClassificationType } from './permissionclassificationtype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DelegatedPermissionClassification extends Entity {
  //#region ODataApi Properties
  classification?: PermissionClassificationType;
  permissionId?: string;
  permissionName?: string;
  //#endregion
}