import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ConnectionDirection } from './connectiondirection.enum';
import { ConnectionStatus } from './connectionstatus.enum';
import { SecurityNetworkProtocol } from './securitynetworkprotocol.enum';
import { NetworkConnection } from './networkconnection.entity';
import { NetworkConnectionCollection } from './networkconnection.collection';
//#endregion

export class NetworkConnectionModel<E extends NetworkConnection> extends ODataModel<E> {
  //#region ODataApi Properties
  applicationName?: string;
  destinationAddress?: string;
  destinationDomain?: string;
  destinationLocation?: string;
  destinationPort?: string;
  destinationUrl?: string;
  direction?: ConnectionDirection;
  domainRegisteredDateTime?: Date;
  localDnsName?: string;
  natDestinationAddress?: string;
  natDestinationPort?: string;
  natSourceAddress?: string;
  natSourcePort?: string;
  protocol?: SecurityNetworkProtocol;
  riskScore?: string;
  sourceAddress?: string;
  sourceLocation?: string;
  sourcePort?: string;
  status?: ConnectionStatus;
  urlParameters?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}