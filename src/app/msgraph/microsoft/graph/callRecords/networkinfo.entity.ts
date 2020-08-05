import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
import { WifiBand } from './wifiband.enum';
import { WifiRadioType } from './wifiradiotype.enum';
//#endregion

export interface NetworkInfo {
  //#region ODataApi Properties
  ipAddress?: string;
  subnet?: string;
  linkSpeed?: number;
  connectionType: NetworkConnectionType;
  port?: number;
  reflexiveIPAddress?: string;
  relayIPAddress?: string;
  relayPort?: number;
  macAddress?: string;
  wifiMicrosoftDriver?: string;
  wifiMicrosoftDriverVersion?: string;
  wifiVendorDriver?: string;
  wifiVendorDriverVersion?: string;
  wifiChannel?: number;
  wifiBand: WifiBand;
  basicServiceSetIdentifier?: string;
  wifiRadioType: WifiRadioType;
  wifiSignalStrength?: number;
  wifiBatteryCharge?: number;
  dnsSuffix?: string;
  sentQualityEventRatio?: number;
  receivedQualityEventRatio?: number;
  delayEventRatio?: number;
  bandwidthLowEventRatio?: number;
  //#endregion
}