import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppModel } from './mobilelobapp.model';
import { WindowsArchitecture } from './windowsarchitecture.enum';
import { Win32LobAppRule } from './win32lobapprule.complex';
import { Win32LobAppInstallExperience } from './win32lobappinstallexperience.complex';
import { Win32LobAppMsiInformation } from './win32lobappmsiinformation.complex';
import { Win32LobAppReturnCode } from './win32lobappreturncode.complex';
import { Win32LobApp } from './win32lobapp.entity';
import { Win32LobAppRuleModel } from './win32lobapprule.model';
import { Win32LobAppInstallExperienceModel } from './win32lobappinstallexperience.model';
import { Win32LobAppMsiInformationModel } from './win32lobappmsiinformation.model';
import { Win32LobAppReturnCodeModel } from './win32lobappreturncode.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppInstallExperienceCollection } from './win32lobappinstallexperience.collection';
import { Win32LobAppMsiInformationCollection } from './win32lobappmsiinformation.collection';
import { Win32LobAppReturnCodeCollection } from './win32lobappreturncode.collection';
import { Win32LobAppCollection } from './win32lobapp.collection';
//#endregion

export class Win32LobAppModel<E extends Win32LobApp> extends MobileLobAppModel<E> {
  //#region ODataApi Properties
  applicableArchitectures: WindowsArchitecture;
  installCommandLine?: string;
  installExperience?: Win32LobAppInstallExperienceModel<Win32LobAppInstallExperience>;
  minimumCpuSpeedInMHz?: number;
  minimumFreeDiskSpaceInMB?: number;
  minimumMemoryInMB?: number;
  minimumNumberOfProcessors?: number;
  minimumSupportedWindowsRelease?: string;
  msiInformation?: Win32LobAppMsiInformationModel<Win32LobAppMsiInformation>;
  returnCodes?: Win32LobAppReturnCodeCollection<Win32LobAppReturnCode, Win32LobAppReturnCodeModel<Win32LobAppReturnCode>>;
  rules?: Win32LobAppRuleCollection<Win32LobAppRule, Win32LobAppRuleModel<Win32LobAppRule>>;
  setupFilePath?: string;
  uninstallCommandLine?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}