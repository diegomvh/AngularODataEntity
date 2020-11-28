import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PermissionType } from './permissiontype.enum';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface PermissionGrantConditionSet extends Entity {
  //#region ODataApi Properties
  clientApplicationIds?: string[];
  clientApplicationPublisherIds?: string[];
  clientApplicationsFromVerifiedPublisherOnly?: boolean;
  clientApplicationTenantIds?: string[];
  permissionClassification?: string;
  permissions?: string[];
  permissionType?: PermissionType;
  resourceApplication?: string;
  //#endregion
}