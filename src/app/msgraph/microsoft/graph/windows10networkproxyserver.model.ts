import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Windows10NetworkProxyServer } from './windows10networkproxyserver.entity';
import { Windows10NetworkProxyServerCollection } from './windows10networkproxyserver.collection';
//#endregion

export class Windows10NetworkProxyServerModel<E extends Windows10NetworkProxyServer> extends ODataModel<E> {
  //#region ODataApi Properties
  address: string;
  exceptions?: string[];
  useForLocalAddresses: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}