import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectModel } from './directoryobject.model';
import { Endpoint } from './endpoint.entity';
import { EndpointCollection } from './endpoint.collection';
//#endregion

export class EndpointModel<E extends Endpoint> extends DirectoryObjectModel<E> {
  //#region ODataApi Properties
  capability: string;
  providerId?: string;
  providerName?: string;
  providerResourceId?: string;
  uri: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}