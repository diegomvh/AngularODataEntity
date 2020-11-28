import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { AppRoleAssignment } from './approleassignment.entity';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
//#endregion

export class AppRoleAssignmentModel<E extends AppRoleAssignment> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  appRoleId: string;
  createdDateTime?: Date;
  principalDisplayName?: string;
  principalId?: string;
  principalType?: string;
  resourceDisplayName?: string;
  resourceId?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}