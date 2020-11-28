import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileLobAppCollection } from './mobilelobapp.collection';
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
import { Win32LobAppModel } from './win32lobapp.model';
import { Win32LobAppRuleCollection } from './win32lobapprule.collection';
import { Win32LobAppInstallExperienceCollection } from './win32lobappinstallexperience.collection';
import { Win32LobAppMsiInformationCollection } from './win32lobappmsiinformation.collection';
import { Win32LobAppReturnCodeCollection } from './win32lobappreturncode.collection';
//#endregion

export class Win32LobAppCollection<E extends Win32LobApp, M extends Win32LobAppModel<E>> extends MobileLobAppCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}