import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CloudAppSecurityState } from './cloudappsecuritystate.complex';
import { CloudAppSecurityStateModel } from './cloudappsecuritystate.model';
//#endregion

export class CloudAppSecurityStateCollection<E extends CloudAppSecurityState, M extends CloudAppSecurityStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}