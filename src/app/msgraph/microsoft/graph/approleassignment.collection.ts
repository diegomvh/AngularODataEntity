import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AppRoleAssignment } from './approleassignment.entity';
import { AppRoleAssignmentModel } from './approleassignment.model';
//#endregion

export class AppRoleAssignmentCollection<E extends AppRoleAssignment, M extends AppRoleAssignmentModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}