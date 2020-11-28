import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { DirectoryRole } from './directoryrole.entity';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
import { DirectoryRoleCollection } from './directoryrole.collection';
//#endregion

export class DirectoryRoleModel<E extends DirectoryRole> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  roleTemplateId?: string;
  members?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  scopedMembers?: ScopedRoleMembershipCollection<ScopedRoleMembership, ScopedRoleMembershipModel<ScopedRoleMembership>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}