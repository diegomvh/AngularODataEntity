import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { NetworkInfo } from './networkinfo.entity';
import { NetworkInfoModel } from './networkinfo.model';
import { NetworkInfoCollection } from './networkinfo.collection';
//#endregion

export const NetworkInfoConfig = {
  name: "networkInfo",
  model: NetworkInfoModel,
  collection: NetworkInfoCollection,
  annotations: [],
  fields: {
    bandwidthLowEventRatio: {type: 'Edm.Single'},
    basicServiceSetIdentifier: {type: 'Edm.String'},
    connectionType: {type: 'microsoft.graph.callRecords.networkConnectionType', nullable: false},
    delayEventRatio: {type: 'Edm.Single'},
    dnsSuffix: {type: 'Edm.String'},
    ipAddress: {type: 'Edm.String'},
    linkSpeed: {type: 'Edm.Int64'},
    macAddress: {type: 'Edm.String'},
    port: {type: 'Edm.Int32'},
    receivedQualityEventRatio: {type: 'Edm.Single'},
    reflexiveIPAddress: {type: 'Edm.String'},
    relayIPAddress: {type: 'Edm.String'},
    relayPort: {type: 'Edm.Int32'},
    sentQualityEventRatio: {type: 'Edm.Single'},
    subnet: {type: 'Edm.String'},
    wifiBand: {type: 'microsoft.graph.callRecords.wifiBand', nullable: false},
    wifiBatteryCharge: {type: 'Edm.Int32'},
    wifiChannel: {type: 'Edm.Int32'},
    wifiMicrosoftDriver: {type: 'Edm.String'},
    wifiMicrosoftDriverVersion: {type: 'Edm.String'},
    wifiRadioType: {type: 'microsoft.graph.callRecords.wifiRadioType', nullable: false},
    wifiSignalStrength: {type: 'Edm.Int32'},
    wifiVendorDriver: {type: 'Edm.String'},
    wifiVendorDriverVersion: {type: 'Edm.String'}
  }
} as EntityConfig<NetworkInfo>;