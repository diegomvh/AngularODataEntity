import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { NetworkConnectionType } from './networkconnectiontype.enum';
import { WifiBand } from './wifiband.enum';
import { WifiRadioType } from './wifiradiotype.enum';
//#endregion

export interface NetworkInfo {
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
}