import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
import { WifiBand } from './wifiband.enum';
import { WifiRadioType } from './wifiradiotype.enum';
import { NetworkInfo } from './networkinfo.entity';
import { NetworkInfoCollection } from './networkinfo.collection';
//#endregion

export class NetworkInfoModel<E extends NetworkInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  bandwidthLowEventRatio?: number;
  basicServiceSetIdentifier?: string;
  connectionType: NetworkConnectionType;
  delayEventRatio?: number;
  dnsSuffix?: string;
  ipAddress?: string;
  linkSpeed?: number;
  macAddress?: string;
  port?: number;
  receivedQualityEventRatio?: number;
  reflexiveIPAddress?: string;
  relayIPAddress?: string;
  relayPort?: number;
  sentQualityEventRatio?: number;
  subnet?: string;
  wifiBand: WifiBand;
  wifiBatteryCharge?: number;
  wifiChannel?: number;
  wifiMicrosoftDriver?: string;
  wifiMicrosoftDriverVersion?: string;
  wifiRadioType: WifiRadioType;
  wifiSignalStrength?: number;
  wifiVendorDriver?: string;
  wifiVendorDriverVersion?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}