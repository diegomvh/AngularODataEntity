import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobApp } from './win32lobapp.entity';
import { Win32LobAppModel } from './win32lobapp.model';
import { Win32LobAppCollection } from './win32lobapp.collection';
//#endregion

export const Win32LobAppConfig = {
  name: "win32LobApp",
  base: "microsoft.graph.mobileLobApp",
  model: Win32LobAppModel,
  collection: Win32LobAppCollection,
  annotations: [],
  fields: {
    applicableArchitectures: {type: 'graph.windowsArchitecture', nullable: false},
    installCommandLine: {type: 'Edm.String'},
    installExperience: {type: 'graph.win32LobAppInstallExperience'},
    minimumCpuSpeedInMHz: {type: 'Edm.Int32'},
    minimumFreeDiskSpaceInMB: {type: 'Edm.Int32'},
    minimumMemoryInMB: {type: 'Edm.Int32'},
    minimumNumberOfProcessors: {type: 'Edm.Int32'},
    minimumSupportedWindowsRelease: {type: 'Edm.String'},
    msiInformation: {type: 'graph.win32LobAppMsiInformation'},
    returnCodes: {type: 'graph.win32LobAppReturnCode', collection: true},
    rules: {type: 'graph.win32LobAppRule', collection: true},
    setupFilePath: {type: 'Edm.String'},
    uninstallCommandLine: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Win32LobApp>;