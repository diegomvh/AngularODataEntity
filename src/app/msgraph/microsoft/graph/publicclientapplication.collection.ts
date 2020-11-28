import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicClientApplication } from './publicclientapplication.complex';
import { PublicClientApplicationModel } from './publicclientapplication.model';
//#endregion

export class PublicClientApplicationCollection<E extends PublicClientApplication, M extends PublicClientApplicationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}