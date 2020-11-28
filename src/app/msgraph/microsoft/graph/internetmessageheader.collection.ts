import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InternetMessageHeader } from './internetmessageheader.complex';
import { InternetMessageHeaderModel } from './internetmessageheader.model';
//#endregion

export class InternetMessageHeaderCollection<E extends InternetMessageHeader, M extends InternetMessageHeaderModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}