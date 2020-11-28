import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { DirectoryObjectModel } from './directoryobject.model';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
//#endregion

export interface DirectoryRole extends DirectoryObject {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  roleTemplateId?: string;
  members?: DirectoryObject[];
  scopedMembers?: ScopedRoleMembership[];
  //#endregion
}