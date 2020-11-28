import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { HostSecurityState } from './hostsecuritystate.entity';
import { HostSecurityStateCollection } from './hostsecuritystate.collection';
//#endregion

export class HostSecurityStateModel<E extends HostSecurityState> extends ODataModel<E> {
  //#region ODataApi Properties
  fqdn?: string;
  isAzureAdJoined?: boolean;
  isAzureAdRegistered?: boolean;
  isHybridAzureDomainJoined?: boolean;
  netBiosName?: string;
  os?: string;
  privateIpAddress?: string;
  publicIpAddress?: string;
  riskScore?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}