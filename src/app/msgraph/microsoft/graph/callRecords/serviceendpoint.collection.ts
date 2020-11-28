import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EndpointCollection } from './endpoint.collection';
import { ServiceEndpoint } from './serviceendpoint.entity';
import { ServiceEndpointModel } from './serviceendpoint.model';
//#endregion

export class ServiceEndpointCollection<E extends ServiceEndpoint, M extends ServiceEndpointModel<E>> extends EndpointCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}