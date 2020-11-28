import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InformationalUrl } from './informationalurl.complex';
import { InformationalUrlModel } from './informationalurl.model';
//#endregion

export class InformationalUrlCollection<E extends InformationalUrl, M extends InformationalUrlModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}