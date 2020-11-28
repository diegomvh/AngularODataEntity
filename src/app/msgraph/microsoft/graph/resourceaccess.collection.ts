import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceAccess } from './resourceaccess.complex';
import { ResourceAccessModel } from './resourceaccess.model';
//#endregion

export class ResourceAccessCollection<E extends ResourceAccess, M extends ResourceAccessModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}