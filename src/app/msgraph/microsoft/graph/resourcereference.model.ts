import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ResourceReference } from './resourcereference.complex';
import { ResourceReferenceCollection } from './resourcereference.collection';
//#endregion

export class ResourceReferenceModel<E extends ResourceReference> extends ODataModel<E> {
  //#region ODataApi Properties
  id?: string;
  type?: string;
  webUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}