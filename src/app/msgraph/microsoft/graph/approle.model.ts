import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppRole } from './approle.complex';
import { AppRoleCollection } from './approle.collection';
//#endregion

export class AppRoleModel<E extends AppRole> extends ODataModel<E> {
  //#region ODataApi Properties
  allowedMemberTypes: string[];
  description?: string;
  displayName?: string;
  id: string;
  isEnabled: boolean;
  origin?: string;
  value?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}