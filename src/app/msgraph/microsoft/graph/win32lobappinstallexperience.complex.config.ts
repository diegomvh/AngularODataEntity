import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Win32LobAppInstallExperience } from './win32lobappinstallexperience.complex';
import { Win32LobAppInstallExperienceModel } from './win32lobappinstallexperience.model';
import { Win32LobAppInstallExperienceCollection } from './win32lobappinstallexperience.collection';
//#endregion

export const Win32LobAppInstallExperienceConfig = {
  name: "win32LobAppInstallExperience",
  model: Win32LobAppInstallExperienceModel,
  collection: Win32LobAppInstallExperienceCollection,
  annotations: [],
  fields: {
    deviceRestartBehavior: {type: 'graph.win32LobAppRestartBehavior', nullable: false},
    runAsAccount: {type: 'graph.runAsAccountType', nullable: false}
  }
} as StructuredTypeConfig<Win32LobAppInstallExperience>;