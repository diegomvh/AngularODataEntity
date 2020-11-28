import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { InternetSiteSecurityLevel } from './internetsitesecuritylevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { SiteSecurityLevel } from './sitesecuritylevel.enum';
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
import { Windows81GeneralConfiguration } from './windows81generalconfiguration.entity';
import { Windows81GeneralConfigurationModel } from './windows81generalconfiguration.model';
//#endregion

export class Windows81GeneralConfigurationCollection<E extends Windows81GeneralConfiguration, M extends Windows81GeneralConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}