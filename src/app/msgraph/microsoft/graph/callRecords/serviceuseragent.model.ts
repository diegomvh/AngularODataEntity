import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgentModel } from './useragent.model';
import { ServiceRole } from './servicerole.enum';
import { ServiceUserAgent } from './serviceuseragent.complex';
import { ServiceUserAgentCollection } from './serviceuseragent.collection';
//#endregion

export class ServiceUserAgentModel<E extends ServiceUserAgent> extends UserAgentModel<E> {
  //#region ODataApi Properties
  role: ServiceRole;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}