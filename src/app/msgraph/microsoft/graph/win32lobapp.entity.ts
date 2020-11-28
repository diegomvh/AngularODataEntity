import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileLobApp } from './mobilelobapp.entity';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppInstallExperience } from './win32lobappinstallexperience.complex';
import { Win32LobAppMsiInformation } from './win32lobappmsiinformation.complex';
import { Win32LobAppReturnCode } from './win32lobappreturncode.complex';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppInstallExperienceModel } from './win32lobappinstallexperience.model';
import { Win32LobAppMsiInformationModel } from './win32lobappmsiinformation.model';
import { Win32LobAppReturnCodeModel } from './win32lobappreturncode.model';
import { MobileLobAppModel } from './mobilelobapp.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppInstallExperienceCollection } from './win32lobappinstallexperience.collection';
import { Win32LobAppMsiInformationCollection } from './win32lobappmsiinformation.collection';
import { Win32LobAppReturnCodeCollection } from './win32lobappreturncode.collection';
import { MobileLobAppCollection } from './mobilelobapp.collection';
//#endregion

export interface Win32LobApp extends MobileLobApp {
  //#region ODataApi Properties
  applicableArchitectures: WindowsArchitecture;
  installCommandLine?: string;
  installExperience?: Win32LobAppInstallExperience;
  minimumCpuSpeedInMHz?: number;
  minimumFreeDiskSpaceInMB?: number;
  minimumMemoryInMB?: number;
  minimumNumberOfProcessors?: number;
  minimumSupportedWindowsRelease?: string;
  msiInformation?: Win32LobAppMsiInformation;
  returnCodes?: Win32LobAppReturnCode[];
  rules?: Win32LobAppRule[];
  setupFilePath?: string;
  uninstallCommandLine?: string;
  //#endregion
}