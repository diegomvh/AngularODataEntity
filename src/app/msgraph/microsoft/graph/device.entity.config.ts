import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Device } from './device.entity';
//#endregion

export const DeviceConfig = {
  name: "device",
  base: "microsoft.graph.directoryObject",
  open: true,
  annotations: [],
  fields: {
    accountEnabled: {type: 'Edm.Boolean'},
    alternativeSecurityIds: {type: 'graph.alternativeSecurityId', nullable: false, collection: true},
    approximateLastSignInDateTime: {type: 'Edm.DateTimeOffset'},
    complianceExpirationDateTime: {type: 'Edm.DateTimeOffset'},
    deviceId: {type: 'Edm.String'},
    deviceMetadata: {type: 'Edm.String'},
    deviceVersion: {type: 'Edm.Int32'},
    displayName: {type: 'Edm.String'},
    isCompliant: {type: 'Edm.Boolean'},
    isManaged: {type: 'Edm.Boolean'},
    mdmAppId: {type: 'Edm.String'},
    onPremisesLastSyncDateTime: {type: 'Edm.DateTimeOffset'},
    onPremisesSyncEnabled: {type: 'Edm.Boolean'},
    operatingSystem: {type: 'Edm.String'},
    operatingSystemVersion: {type: 'Edm.String'},
    physicalIds: {type: 'Edm.String', nullable: false, collection: true},
    profileType: {type: 'Edm.String'},
    systemLabels: {type: 'Edm.String', nullable: false, collection: true},
    trustType: {type: 'Edm.String'},
    memberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    registeredOwners: {type: 'graph.directoryObject', collection: true, navigation: true},
    registeredUsers: {type: 'graph.directoryObject', collection: true, navigation: true},
    transitiveMemberOf: {type: 'graph.directoryObject', collection: true, navigation: true},
    extensions: {type: 'graph.extension', collection: true, navigation: true}
  }
} as EntityConfig<Device>;