import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConnectionDirection } from './connectiondirection.enum';
import { ConnectionStatus } from './connectionstatus.enum';
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
import { NetworkConnection } from './networkconnection.complex';
import { NetworkConnectionModel } from './networkconnection.model';
//#endregion

export class NetworkConnectionCollection<E extends NetworkConnection, M extends NetworkConnectionModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}