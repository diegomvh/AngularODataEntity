import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppMsiInformation } from './win32lobappmsiinformation.complex';
import { Win32LobAppMsiInformationModel } from './win32lobappmsiinformation.model';
import { Win32LobAppMsiInformationCollection } from './win32lobappmsiinformation.collection';
//#endregion

export const Win32LobAppMsiInformationConfig = {
  name: "win32LobAppMsiInformation",
  model: Win32LobAppMsiInformationModel,
  collection: Win32LobAppMsiInformationCollection,
  annotations: [],
  fields: {
    packageType: {type: 'graph.win32LobAppMsiPackageType', nullable: false},
    productCode: {type: 'Edm.String'},
    productName: {type: 'Edm.String'},
    productVersion: {type: 'Edm.String'},
    publisher: {type: 'Edm.String'},
    requiresReboot: {type: 'Edm.Boolean', nullable: false},
    upgradeCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Win32LobAppMsiInformation>;