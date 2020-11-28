import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppRestartBehavior } from './win32lobapprestartbehavior.enum';
import { Win32LobAppInstallExperience } from './win32lobappinstallexperience.complex';
import { Win32LobAppInstallExperienceCollection } from './win32lobappinstallexperience.collection';
//#endregion

export class Win32LobAppInstallExperienceModel<E extends Win32LobAppInstallExperience> extends ODataModel<E> {
  //#region ODataApi Properties
  deviceRestartBehavior: Win32LobAppRestartBehavior;
  runAsAccount: RunAsAccountType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}