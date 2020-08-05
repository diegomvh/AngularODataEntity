import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NetworkInfo } from './networkinfo.entity';
//#endregion

export const NetworkInfoConfig = {
  name: "networkInfo",
  annotations: [],
  fields: {
    ipAddress: {type: 'Edm.String'},
    subnet: {type: 'Edm.String'},
    linkSpeed: {type: 'Edm.Int64'},
    connectionType: {type: 'microsoft.graph.callRecords.networkConnectionType', nullable: false},
    port: {type: 'Edm.Int32'},
    reflexiveIPAddress: {type: 'Edm.String'},
    relayIPAddress: {type: 'Edm.String'},
    relayPort: {type: 'Edm.Int32'},
    macAddress: {type: 'Edm.String'},
    wifiMicrosoftDriver: {type: 'Edm.String'},
    wifiMicrosoftDriverVersion: {type: 'Edm.String'},
    wifiVendorDriver: {type: 'Edm.String'},
    wifiVendorDriverVersion: {type: 'Edm.String'},
    wifiChannel: {type: 'Edm.Int32'},
    wifiBand: {type: 'microsoft.graph.callRecords.wifiBand', nullable: false},
    basicServiceSetIdentifier: {type: 'Edm.String'},
    wifiRadioType: {type: 'microsoft.graph.callRecords.wifiRadioType', nullable: false},
    wifiSignalStrength: {type: 'Edm.Int32'},
    wifiBatteryCharge: {type: 'Edm.Int32'},
    dnsSuffix: {type: 'Edm.String'},
    sentQualityEventRatio: {type: 'Edm.Single'},
    receivedQualityEventRatio: {type: 'Edm.Single'},
    delayEventRatio: {type: 'Edm.Single'},
    bandwidthLowEventRatio: {type: 'Edm.Single'}
  }
} as EntityConfig<NetworkInfo>;