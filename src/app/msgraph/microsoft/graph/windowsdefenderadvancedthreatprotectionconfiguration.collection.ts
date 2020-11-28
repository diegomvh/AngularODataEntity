import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { WindowsDefenderAdvancedThreatProtectionConfiguration } from './windowsdefenderadvancedthreatprotectionconfiguration.entity';
import { WindowsDefenderAdvancedThreatProtectionConfigurationModel } from './windowsdefenderadvancedthreatprotectionconfiguration.model';
//#endregion

export class WindowsDefenderAdvancedThreatProtectionConfigurationCollection<E extends WindowsDefenderAdvancedThreatProtectionConfiguration, M extends WindowsDefenderAdvancedThreatProtectionConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}