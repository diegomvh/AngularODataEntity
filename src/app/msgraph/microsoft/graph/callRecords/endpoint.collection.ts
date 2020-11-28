import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { Endpoint } from './endpoint.entity';
import { UserAgentModel } from './useragent.model';
import { EndpointModel } from './endpoint.model';
import { UserAgentCollection } from './useragent.collection';
//#endregion

export class EndpointCollection<E extends Endpoint, M extends EndpointModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}