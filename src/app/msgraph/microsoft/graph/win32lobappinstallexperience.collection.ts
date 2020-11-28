import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RunAsAccountType } from './runasaccounttype.enum';
import { Win32LobAppRestartBehavior } from './win32lobapprestartbehavior.enum';
import { Win32LobAppInstallExperience } from './win32lobappinstallexperience.complex';
import { Win32LobAppInstallExperienceModel } from './win32lobappinstallexperience.model';
//#endregion

export class Win32LobAppInstallExperienceCollection<E extends Win32LobAppInstallExperience, M extends Win32LobAppInstallExperienceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}