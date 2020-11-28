import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RequiredResourceAccess } from './requiredresourceaccess.complex';
import { ResourceAccess } from './resourceaccess.complex';
import { RequiredResourceAccessModel } from './requiredresourceaccess.model';
import { ResourceAccessModel } from './resourceaccess.model';
import { ResourceAccessCollection } from './resourceaccess.collection';
//#endregion

export class RequiredResourceAccessCollection<E extends RequiredResourceAccess, M extends RequiredResourceAccessModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}