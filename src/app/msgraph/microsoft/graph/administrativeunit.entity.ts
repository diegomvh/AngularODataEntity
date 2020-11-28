import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { Extension } from './extension.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { ExtensionModel } from './extension.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
import { ExtensionCollection } from './extension.collection';
//#endregion

export interface AdministrativeUnit extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  visibility?: string;
  members?: DirectoryObject[];
  scopedRoleMembers?: ScopedRoleMembership[];
  extensions?: Extension[];
  //#endregion
}