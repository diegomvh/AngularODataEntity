import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { DirectoryObject } from './directoryobject.entity';
import { ScopedRoleMembership } from './scopedrolemembership.entity';
import { Extension } from './extension.entity';
import { AdministrativeUnit } from './administrativeunit.entity';
import { ScopedRoleMembershipModel } from './scopedrolemembership.model';
import { ExtensionModel } from './extension.model';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { ScopedRoleMembershipCollection } from './scopedrolemembership.collection';
import { ExtensionCollection } from './extension.collection';
import { AdministrativeUnitCollection } from './administrativeunit.collection';
//#endregion

export class AdministrativeUnitModel<E extends AdministrativeUnit> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  description?: string;
  displayName?: string;
  visibility?: string;
  members?: DirectoryObjectCollection<DirectoryObject, DirectoryObjectModel<DirectoryObject>>;
  scopedRoleMembers?: ScopedRoleMembershipCollection<ScopedRoleMembership, ScopedRoleMembershipModel<ScopedRoleMembership>>;
  extensions?: ExtensionCollection<Extension, ExtensionModel<Extension>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}