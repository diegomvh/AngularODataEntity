import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.entity';
import { ResourceAccessCollection } from './resourceaccess.collection';
//#endregion

export class ResourceAccessModel<E extends ResourceAccess> extends ODataModel<E> {
  //#region ODataApi Properties
  id: string;
  type?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}