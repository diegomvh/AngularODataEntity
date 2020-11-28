import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgentCollection } from './useragent.collection';
import { ServiceRole } from './servicerole.enum';
import { ServiceUserAgent } from './serviceuseragent.entity';
import { ServiceUserAgentModel } from './serviceuseragent.model';
//#endregion

export class ServiceUserAgentCollection<E extends ServiceUserAgent, M extends ServiceUserAgentModel<E>> extends UserAgentCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}