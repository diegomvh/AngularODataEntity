import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointModel } from './endpoint.model';
import { ServiceEndpoint } from './serviceendpoint.complex';
import { ServiceEndpointCollection } from './serviceendpoint.collection';
//#endregion

export class ServiceEndpointModel<E extends ServiceEndpoint> extends EndpointModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}