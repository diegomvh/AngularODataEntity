import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgentCollection } from './useragent.collection';
import { ClientPlatform } from './clientplatform.enum';
import { ProductFamily } from './productfamily.enum';
import { ClientUserAgent } from './clientuseragent.complex';
import { ClientUserAgentModel } from './clientuseragent.model';
//#endregion

export class ClientUserAgentCollection<E extends ClientUserAgent, M extends ClientUserAgentModel<E>> extends UserAgentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}