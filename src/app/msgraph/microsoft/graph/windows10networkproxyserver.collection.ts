import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.entity';
import { Windows10NetworkProxyServerModel } from './windows10networkproxyserver.model';
//#endregion

export class Windows10NetworkProxyServerCollection<E extends Windows10NetworkProxyServer, M extends Windows10NetworkProxyServerModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}