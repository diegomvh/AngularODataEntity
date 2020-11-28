import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { Endpoint } from './endpoint.entity';
import { UserAgentModel } from './useragent.model';
import { UserAgentCollection } from './useragent.collection';
import { EndpointCollection } from './endpoint.collection';
//#endregion

export class EndpointModel<E extends Endpoint> extends ODataModel<E> {
  //#region ODataApi Properties
  userAgent?: UserAgentModel<UserAgent>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}